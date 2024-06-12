import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'donut-progress',
  styleUrl: 'donut-progress.scss',
  shadow: true,
})
export class DonutProgress {
  @Prop() percent: number;
  @Prop() desktopSize: number = 200;
  @Prop() donutCaption: string = '';

  componentWillLoad() {
    if (this.percent > 100) {
      this.percent = 100;
    }
    if (this.percent < 0) {
      this.percent = 0;
    }
  }

  get gradient() {
    const completedPercent = this.percent;
    return completedPercent === 100
      ? 'conic-gradient(#53d357 0%, #0f8d13 100%)'
      : `conic-gradient(
        #12407E 0%, 
        #12407E ${(completedPercent / 6) * 1}%, 
        #0F4A92 ${(completedPercent / 6) * 2}%, 
        #0A5DB8 ${(completedPercent / 6) * 3}%, 
        #066ED9 ${(completedPercent / 6) * 4}%, 
        #056FDD ${(completedPercent / 6) * 5}%, 
        #0180FF ${completedPercent}%, 
        #f2f2f2 ${completedPercent}%, 
        #f2f2f2 100%
      )`;
  }

  render() {
    return (
      <Host>
        <div
          class="pulse-wrapper"
          style={{ '--desktop-size': `${this.desktopSize}px`, '--progress': this.gradient }}
          role="progressbar"
          aria-valuenow={this.percent}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="circular-chart">
            <div class="circle-bg"></div>
            <div class="circle-progress" style={{ background: this.gradient }}></div>
            <div class="circle-inner"></div>
            <div class="text">
              <div class="percentage">{Math.round(this.percent)}%</div>
              <div class="completed">Completed</div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}

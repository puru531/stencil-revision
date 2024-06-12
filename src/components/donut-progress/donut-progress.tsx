import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'donut-progress',
  styleUrl: 'donut-progress.scss',
  shadow: true,
})
export class DonutProgress {
  @Prop() percent: number;
  @Prop() donutSize: number = 200;
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
        #0180FF 0%, 
        #0180FF ${(completedPercent / 6) * 1}%, 
        #056FDD ${(completedPercent / 6) * 2}%, 
        #066ED9 ${(completedPercent / 6) * 3}%, 
        #0A5DB8 ${(completedPercent / 6) * 4}%, 
        #0F4A92 ${(completedPercent / 6) * 5}%, 
        #12407E ${completedPercent}%, 
        #f2f2f2 ${completedPercent}%, 
        #f2f2f2 100%
      )`;
  }

  render() {
    return (
      <Host>
        <div
          class="pulse-wrapper"
          style={{ '--donut-size': `${this.donutSize}px`, '--progress': this.gradient }}
          role="progressbar"
          aria-valuenow={this.percent}
          aria-valuemin="0"
          aria-valuemax="100"
          arie-label={`${this.donutCaption} ${this.percent}% complete`}
        >
          <div class="circular-chart">
            <div class="circle-bg"></div>
            <div class="circle-progress" style={{ background: this.gradient }}></div>
            <div class="circle-inner"></div>
            <figcaption id="progress-description">
              <div class="text">
                <div class="percentage">{Math.round(this.percent)}%</div>
                <div class="completed">Completed</div>
              </div>
            </figcaption>
          </div>
        </div>
      </Host>
    );
  }
}

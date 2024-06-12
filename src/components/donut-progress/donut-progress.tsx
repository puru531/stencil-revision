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
      ? 'conic-gradient(#7AF0A4 0%, #29C45D 33%, #17A646 66%, #7AF0A4 100%)'
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
    const isComplete = this.percent === 100;
    return (
      <Host>
        <figure
          class="pulse-wrapper"
          style={{ '--donut-size': `${this.donutSize}px`, '--progress': this.gradient }}
          aria-valuenow={this.percent}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label={`${this.donutCaption} ${this.percent}% complete`}
        >
          <figcaption class="visually-hidden">{`${this.donutCaption} ${this.percent}% complete`}</figcaption>
          <div class="circular-chart">
            <div class="circle-bg"></div>
            <div class={`circle-progress ${isComplete ? 'rotate-90' : 'rotate-0'}`} style={{ background: this.gradient }}></div>
            <div class="circle-inner"></div>
            <div class="text">
              <div class="percentage">{Math.round(this.percent)}%</div>
              <div class="completed">Completed</div>
            </div>
          </div>
        </figure>
      </Host>
    );
  }
}

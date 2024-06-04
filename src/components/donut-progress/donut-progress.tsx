import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'donut-progress',
  styleUrl: 'donut-progress.css',
  shadow: true,
})
export class DonutProgress {
  @Prop() steps: number = 4;
  @Prop() completedSteps: number = 0;
  @Prop() desktopSize: number = 200;
  @Prop() mobileSize: number = 150;

  get percent() {
    return (this.completedSteps / this.steps) * 100;
  }

  get gradient() {
    const completedPercent = this.percent;
    return completedPercent === 100 ? 'conic-gradient(#53d357 0%, #0f8d13 100%)' : `conic-gradient(#3a9bf0, #0d57ac ${completedPercent}%, #f2f2f2 ${completedPercent}%, #f2f2f2)`;
  }

  render() {
    return (
      <Host>
        <div
          class="pulse-wrapper"
          style={{ '--desktop-size': `${this.desktopSize}px`, '--mobile-size': `${this.mobileSize}px`, '--progress': this.gradient }}
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

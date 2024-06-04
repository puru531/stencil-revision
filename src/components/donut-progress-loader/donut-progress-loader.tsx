import { Component, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'donut-progress-loader',
  styleUrl: 'donut-progress-loader.css',
  shadow: true,
})
export class DonutProgressLoader {
  @Prop() steps: number = 4;
  @Prop() completedSteps: number = 3;
  @Prop() desktopSize: number = 250;
  @Prop() mobileSize: number = 150;

  @State() percent: number = 0;

  get gradientId() {
    return this.percent === 100 ? 'greenGradient' : 'blueGradient';
  }

  componentWillLoad() {
    this.percent = (this.completedSteps / this.steps) * 100;
  }

  componentShouldUpdate() {
    this.percent = (this.completedSteps / this.steps) * 100;
  }

  render() {
    const strokeDasharray = `${this.percent}, 100`;
    return (
      <Host>
        <div
          class="pulse-wrapper"
          style={{ '--desktop-size': `${this.desktopSize}px`, '--mobile-size': `${this.mobileSize}px` }}
          role="progressbar"
          aria-valuenow={this.percent}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <svg viewBox="0 0 36 36" class="circular-chart">
            <defs>
              <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#0d57ac', stopOpacity: '1' }} />
                <stop offset="100%" style={{ stopColor: '#3a9bf0', stopOpacity: '1' }} />
              </linearGradient>
              <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#217425', stopOpacity: '1' }} />
                <stop offset="100%" style={{ stopColor: '#53d357', stopOpacity: '1' }} />
              </linearGradient>
            </defs>
            <path
              class="circle-bg"
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              class="circle"
              stroke-dasharray={strokeDasharray}
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
              stroke={`url(#${this.gradientId})`}
            />
            <text x="18" y="18" class="percentage">
              {Math.round(this.percent)}%
            </text>
            <text x="18" y="22" class="completed">
              Completed
            </text>
          </svg>
        </div>
      </Host>
    );
  }
}

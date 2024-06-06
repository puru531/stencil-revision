import { Component, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'donut-progress-loader',
  styleUrl: 'donut-progress-loader.css',
  shadow: true,
})
export class DonutProgressLoader {
  @Prop() percent: number = 0;
  @Prop() desktopSize: number = 200;
  @Prop() mobileSize: number = 200;

  @State() gradientId: string = 'blueGradient';

  componentWillLoad() {
    this.gradientId = this.percent === 100 ? 'greenGradient' : 'blueGradient';
  }

  componentShouldUpdate() {
    this.gradientId = this.percent === 100 ? 'greenGradient' : 'blueGradient';
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
                <stop offset="0%" stop-color="#12407E" />
                <stop offset="20%" stop-color="#0F4A92" />
                <stop offset="40%" stop-color="#0A5DB8" />
                <stop offset="60%" stop-color="#066ED9" />
                <stop offset="80%" stop-color="#056FDD" />
                <stop offset="100%" stop-color="#0180FF" />
                {/* <stop stop-color="#12407E" />
                <stop offset="0.260019" stop-color="#0F4A92" />
                <stop offset="0.295" stop-color="#0A5DB8" />
                <stop offset="0.545" stop-color="#066ED9" />
                <stop offset="0.832716" stop-color="#056FDD" />
                <stop offset="1" stop-color="#0180FF" /> */}
              </linearGradient>
              <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop stop-color="#17A646" />
                <stop offset="0.53" stop-color="#29C45D" />
                <stop offset="1" stop-color="#7AF0A4" />
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

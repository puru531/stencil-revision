import { Component, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'donut-progress-loader',
  styleUrl: 'donut-progress-loader.scss',
  shadow: true,
})
export class DonutProgressLoader {
  /** Completion percentage of the progress loader (0-100). */
  @Prop() percent: number = 100;

  /** Size of the progress loader in pixels. */
  @Prop() donutSize: number = 200;

  /** ID of the gradient used for rendering the progress loader. */
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
        <figure
          class="donut-wrapper"
          style={{ '--donut-size': `${this.donutSize}px` }}
          aria-valuemin="0"
          aria-valuemax="100"
          tabindex={0}
          aria-label={`Visit checklist, ${Math.round(this.percent)}% complete`}
        >
          <figcaption class="visually-hidden">{`Visit checklist, ${Math.round(this.percent)}% complete`}</figcaption>
          <svg viewBox="0 0 36 36" class="donut-chart" role="img" aria-hidden="true">
            <defs>
              <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#12407E" />
                <stop offset="20%" stop-color="#0F4A92" />
                <stop offset="40%" stop-color="#0A5DB8" />
                <stop offset="60%" stop-color="#066ED9" />
                <stop offset="80%" stop-color="#056FDD" />
                <stop offset="100%" stop-color="#0180FF" />
              </linearGradient>
              <linearGradient id="greenGradient" x1="50%" y1="0%" x2="100%" y2="80%">
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
        </figure>
      </Host>
    );
  }
}

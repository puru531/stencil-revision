import { newSpecPage } from '@stencil/core/testing';
import { DonutProgressLoader } from '../donut-progress-loader';

describe('donut-progress-loader', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DonutProgressLoader],
      html: `<donut-progress-loader></donut-progress-loader>`,
    });
    expect(page.root).toEqualHtml(`
      <donut-progress-loader>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </donut-progress-loader>
    `);
  });
});

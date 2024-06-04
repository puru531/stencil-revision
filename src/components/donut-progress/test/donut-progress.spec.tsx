import { newSpecPage } from '@stencil/core/testing';
import { DonutProgress } from '../donut-progress';

describe('donut-progress', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DonutProgress],
      html: `<donut-progress></donut-progress>`,
    });
    expect(page.root).toEqualHtml(`
      <donut-progress>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </donut-progress>
    `);
  });
});

import { newSpecPage } from '@stencil/core/testing';
import { AppDummy } from '../app-dummy';

describe('app-dummy', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppDummy],
      html: `<app-dummy></app-dummy>`,
    });
    expect(page.root).toBeDefined();
    // expect(page.root).toEqualHtml(`
    //   <app-dummy>
    //     <mock:shadow-root>
    //       <slot></slot>
    //     </mock:shadow-root>
    //   </app-dummy>
    // `);
  });
});

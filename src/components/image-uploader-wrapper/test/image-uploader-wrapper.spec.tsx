import { newSpecPage } from '@stencil/core/testing';
import { ImageUploaderWrapper } from '../image-uploader-wrapper';

describe('image-uploader-wrapper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ImageUploaderWrapper],
      html: `<image-uploader-wrapper></image-uploader-wrapper>`,
    });
    expect(page.root).toEqualHtml(`
      <image-uploader-wrapper>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </image-uploader-wrapper>
    `);
  });
});

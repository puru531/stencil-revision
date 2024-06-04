import { newSpecPage } from '@stencil/core/testing';
import { ImageUploader } from '../image-uploader';

describe('file-uploader', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ImageUploader],
      html: `<image-uploader></image-uploader>`,
    });
    expect(page.root).toEqualHtml(`
      <image-uploader>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </image-uploader>
    `);
  });
});

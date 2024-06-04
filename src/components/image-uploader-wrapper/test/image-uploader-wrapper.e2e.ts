import { newE2EPage } from '@stencil/core/testing';

describe('image-uploader-wrapper', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<image-uploader-wrapper></image-uploader-wrapper>');

    const element = await page.find('image-uploader-wrapper');
    expect(element).toHaveClass('hydrated');
  });
});

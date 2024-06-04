import { newE2EPage } from '@stencil/core/testing';

describe('app-dummy', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-dummy></app-dummy>');

    const element = await page.find('app-dummy');
    expect(element).toHaveClass('hydrated');
  });
});

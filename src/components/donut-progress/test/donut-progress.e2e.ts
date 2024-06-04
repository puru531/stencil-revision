import { newE2EPage } from '@stencil/core/testing';

describe('donut-progress', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<donut-progress></donut-progress>');

    const element = await page.find('donut-progress');
    expect(element).toHaveClass('hydrated');
  });
});

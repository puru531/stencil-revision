import { newE2EPage } from '@stencil/core/testing';

describe('donut-progress-loader', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<donut-progress-loader></donut-progress-loader>');

    const element = await page.find('donut-progress-loader');
    expect(element).toHaveClass('hydrated');
  });
});

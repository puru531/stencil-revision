import { newSpecPage } from '@stencil/core/testing';
import { DonutProgressLoader } from '../donut-progress-loader';

describe('donut-progress-loader', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [DonutProgressLoader],
      html: `<donut-progress-loader></donut-progress-loader>`,
    });
    let donut = page.root.shadowRoot.querySelector('.donut-wrapper');
    expect(donut.getAttribute('style')).toBe('--desktop-size: 200px; --mobile-size: 200px;');
  });

  it('renders with specified props', async () => {
    const page = await newSpecPage({
      components: [DonutProgressLoader],
      html: `<donut-progress-loader percent="75" desktop-size="150" mobile-size="100"></donut-progress-loader>`,
    });
    let donut = page.root.shadowRoot.querySelector('.donut-wrapper');
    expect(donut.getAttribute('style')).toBe('--desktop-size: 150px; --mobile-size: 100px;');
  });

  it('updates gradientId based on percent', async () => {
    const page = await newSpecPage({
      components: [DonutProgressLoader],
      html: `<donut-progress-loader></donut-progress-loader>`,
    });

    const component = page.rootInstance;
    expect(component.gradientId).toBe('greenGradient');

    component.percent = 50;
    await page.waitForChanges();
    expect(component.gradientId).toBe('blueGradient');

    component.percent = 100;
    await page.waitForChanges();
    expect(component.gradientId).toBe('greenGradient');
  });

  it('renders with correct gradient based on percent', async () => {
    const page = await newSpecPage({
      components: [DonutProgressLoader],
      html: `<donut-progress-loader percent="100"></donut-progress-loader>`,
    });

    let circle = page.root.shadowRoot.querySelector('.circle');
    expect(circle.getAttribute('stroke')).toBe('url(#greenGradient)');

    page.root.percent = 50;
    await page.waitForChanges();
    circle = page.root.shadowRoot.querySelector('.circle');
    expect(circle.getAttribute('stroke')).toBe('url(#blueGradient)');
  });

  it('renders with correct strokeDasharray based on percent', async () => {
    const page = await newSpecPage({
      components: [DonutProgressLoader],
      html: `<donut-progress-loader percent="75"></donut-progress-loader>`,
    });

    const circle = page.root.shadowRoot.querySelector('.circle');
    expect(circle.getAttribute('stroke-dasharray')).toBe('75, 100');

    page.root.percent = 50;
    await page.waitForChanges();
    expect(circle.getAttribute('stroke-dasharray')).toBe('50, 100');
  });
});

import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-dummy',
  styleUrl: 'app-dummy.css',
  shadow: true,
})
export class AppDummy {
  render() {
    return (
      <Host>
        <h3>Image Uploader</h3>
        <image-uploader-wrapper></image-uploader-wrapper>

        <h3>Donut progress loader using svg : (Using SVG, Complex to make change in future)</h3>
        <donut-progress-loader steps={4} completedSteps={3} desktopSize={200} mobileSize={150}></donut-progress-loader>

        <h3>Donut progress loader : (Using div)</h3>
        <donut-progress steps={5} completedSteps={4} desktopSize={300} mobileSize={150}></donut-progress>
      </Host>
    );
  }
}

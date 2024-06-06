import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-dummy',
  styleUrl: 'app-dummy.css',
  shadow: true,
})
export class AppDummy {
  private completedStep = 1;

  render() {
    return (
      <Host>
        {/* <h3>Image Uploader</h3>
        <image-uploader-wrapper></image-uploader-wrapper> */}

        {/* <h3>Donut progress loader using svg : (Using SVG, Complex to make change in future)</h3>
        <donut-progress-loader steps={4} completedSteps={3} desktopSize={200} mobileSize={150}></donut-progress-loader> */}

        <h3>Donut progress loader : (Using div)</h3>
        {this.completedStep > 0 && <donut-progress percent={67} desktopSize={250} mobileSize={150}></donut-progress>}
        {this.completedStep > 0 && <donut-progress steps={4} completedSteps={this.completedStep} desktopSize={250} mobileSize={150}></donut-progress>}

        <h2>Step 1</h2>
        <h2>Step 2</h2>
        <h2>Step 3</h2>
        <h2>Step 4</h2>
      </Host>
    );
  }
}

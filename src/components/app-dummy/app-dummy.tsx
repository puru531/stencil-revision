import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-dummy',
  styleUrl: 'app-dummy.scss',
  shadow: true,
})
export class AppDummy {
  // private completedStep = 1;

  render() {
    return (
      <Host>
        {/* <h3>Image Uploader</h3>
        <image-uploader-wrapper></image-uploader-wrapper> */}

        <h3>Donut progress loader using svg : Type 1</h3>
        <donut-progress-loader percent={80} desktopSize={200}></donut-progress-loader>

        {/* <h3>Donut progress loader using div : Type 2</h3>
        {this.completedStep > 0 && <donut-progress percent={67} desktopSize={250} mobileSize={150}></donut-progress>}
        {this.completedStep > 0 && <donut-progress steps={4} completedSteps={this.completedStep} desktopSize={250} mobileSize={150}></donut-progress>} */}
      </Host>
    );
  }
}

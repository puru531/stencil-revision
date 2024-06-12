import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-dummy',
  styleUrl: 'app-dummy.scss',
  shadow: true,
})
export class AppDummy {
  render() {
    return (
      <Host>
        {/* <h3>Image Uploader</h3>
        <image-uploader-wrapper></image-uploader-wrapper> */}

        {/* <h3>Donut progress loader using svg : Type 1</h3>
        <donut-progress-loader percent={80} donutSize={200}></donut-progress-loader> */}

        <h3>Donut progress loader using div : Type 2</h3>
        <donut-progress tabIndex={0} percent={67} donutSize={200} donutCaption="Visit checklist"></donut-progress>
      </Host>
    );
  }
}

import { Component, Host, State, h } from '@stencil/core';

@Component({
  tag: 'image-uploader-wrapper',
  styleUrl: 'image-uploader-wrapper.scss',
  shadow: true,
})
export class ImageUploaderWrapper {
  @State() frontSideImage: File | null = null;
  @State() backSideImage: File | null = null;
  @State() frontSideImageErrorMessage: string = '';
  @State() backSideImageErrorMessage: string = '';
  @State() frontSideImageUploaded: boolean = false;
  @State() backSideImageUploaded: boolean = false;
  @State() frontSideImageUploading: boolean = false;
  @State() backSideImageUploading: boolean = false;

  private handleFrontImageSelection(frontSideImage) {
    this.frontSideImage = frontSideImage;
    this.frontSideImageErrorMessage = '';
  }
  private handleBackImageSelection(backSideImage) {
    this.backSideImage = backSideImage;
    this.backSideImageErrorMessage = '';
  }

  async handleImageUpload() {
    let error = false;
    if (!this.frontSideImage) {
      this.frontSideImageErrorMessage = 'Please select the front image.';
      error = true;
    } else {
      this.frontSideImageErrorMessage = '';
    }
    if (!this.backSideImage) {
      this.backSideImageErrorMessage = 'Please select the back image.';
      error = true;
    } else {
      this.backSideImageErrorMessage = '';
    }

    if (error) {
      return;
    }

    const formData = new FormData();
    formData.append('front', this.frontSideImage);
    formData.append('back', this.backSideImage);

    try {
      this.backSideImageUploading = true;
      this.frontSideImageUploading = true;
      // const response = await axios.post(UPLOAD_URL, formData, {
      //   headers: { 'Content-Type': 'multipart/form-data' },
      // });

      console.log('==========', this.frontSideImage, this.backSideImage, formData);

      // if (response.status === 200) {
      if (formData) {
        this.frontSideImageUploaded = true;
        this.backSideImageUploaded = true;
        this.frontSideImageErrorMessage = '';
        this.backSideImageErrorMessage = '';
      } else {
        this.frontSideImageErrorMessage = 'Failed to upload front image.';
        this.backSideImageErrorMessage = 'Failed to upload back image.';
      }
    } catch (error) {
      this.frontSideImageErrorMessage = 'Failed to upload front image.';
      this.backSideImageErrorMessage = 'Failed to upload back image.';
    } finally {
      this.frontSideImageUploading = false;
      this.backSideImageUploading = false;
    }
  }

  render() {
    return (
      <Host>
        <div class="wrapper">
          <div class="container">
            <image-uploader
              errorMessage={this.frontSideImageErrorMessage}
              uploadSuccess={this.frontSideImageUploaded}
              loading={this.frontSideImageUploading}
              uploadLabel="Upload front size image"
              onImageSelected={e => this.handleFrontImageSelection(e.detail)}
            />

            <image-uploader
              errorMessage={this.backSideImageErrorMessage}
              uploadSuccess={this.backSideImageUploaded}
              loading={this.backSideImageUploading}
              uploadLabel="Upload back size image"
              onImageSelected={e => this.handleBackImageSelection(e.detail)}
            />
          </div>
          <div class="btn-container">
            <button
              class="upload-button"
              onClick={() => this.handleImageUpload()}
              disabled={this.frontSideImageUploading || this.backSideImageUploading || (this.frontSideImageUploaded && this.backSideImageUploaded)}
            >
              Upload
            </button>
          </div>
        </div>
      </Host>
    );
  }
}

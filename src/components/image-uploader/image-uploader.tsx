import { Component, Event, EventEmitter, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'image-uploader',
  styleUrl: 'image-uploader.scss',
  shadow: true,
})
export class ImageUploader {
  @Event() imageSelected: EventEmitter<File>;

  @Prop() width: number = 200;
  @Prop() height: number = 180;
  @Prop() successIconHeight: number = 40;
  @Prop() uploadLabel: string = 'Upload image';
  @Prop() loading: boolean = false;
  @Prop() errorMessage: string = '';
  @Prop() uploadSuccess = false;

  @State() imageName: string | null = null;

  private handleFileSelection(event: Event, setImageName: (url: string) => void): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      // setImageUrl(URL.createObjectURL(file));
      setImageName(file?.name);
      this.imageSelected.emit(file);
    } else {
      setImageName(null);
    }
  }

  render() {
    return (
      <div class="uploader-container" style={{ width: `${this.width}px` }}>
        <div class="uploader-box" style={{ width: `${this.width}px`, height: `${this.height}px` }}>
          {this.uploadSuccess && (
            <div class="upload-success">
              <img src="../assets/success-icon.svg" height={this.successIconHeight} />
              <p class="upload-success-text">Uploaded</p>
            </div>
          )}
          {this.loading && <div class="spinner"></div>}
          {!this.uploadSuccess && !this.loading && (
            <label class="uploader-label">
              <span class="uploader-text">{this.uploadLabel}</span>
              <input type="file" accept="image/*" onChange={e => this.handleFileSelection(e, name => (this.imageName = name))} />
              {this.imageName && <div class="image-name">{this.imageName}</div>}
            </label>
          )}
        </div>
        {this.errorMessage && <p class="error-message">{this.errorMessage}</p>}

        {/* <div class="uploader-box">
            <label class="uploader-label">
              {this.backImageUrl ? <img src={this.backImageUrl} alt="Back Preview" class="preview-image" /> : 'Upload Back Side'}
              <input
                type="file"
                accept="image/*"
                onChange={e =>
                  this.handleFileChange(
                    e,
                    file => (this.backImage = file),
                    url => (this.backImageUrl = url),
                    error => (this.backError = error),
                  )
                }
              />
              {this.backUploadSuccess && <span class="success-icon">✅</span>}
            </label>
            {this.backError && <p class="error-message">{this.backError}</p>}
          </div> */}
        {/* <button class="upload-button" onClick={() => this.handleUpload()} disabled={this.loading}>
            {this.loading ? <span class="spinner"></span> : 'Upload'}
          </button> */}
      </div>
    );
  }
}

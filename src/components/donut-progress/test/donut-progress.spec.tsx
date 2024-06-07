import { newSpecPage } from '@stencil/core/testing';
import { DonutProgress } from '../donut-progress';

describe('donut-progress', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DonutProgress],
      html: `<donut-progress></donut-progress>`,
    });
    // expect(page.root).toEqualHtml(`
    //   <donut-progress>
    //     <mock:shadow-root>
    //     <div class="uploader-container" style="width: 200px;">
    //             <div class="uploader-box" style="width: 200px; height: 180px;">
    //               <label class="uploader-label">
    //                 <span class="uploader-text">
    //                   Upload image
    //                 </span>
    //                 <input accept="image/*" type="file">
    //               </label>
    //             </div>
    //           </div>
    //     </mock:shadow-root>
    //   </donut-progress>
    // `);
    expect(page.root).toBeDefined();
  });
});

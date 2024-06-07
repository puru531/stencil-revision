const fs = require('fs-extra');
const path = require('path');

const componentName = process.argv[2];
if (!componentName) {
  console.error('Please provide a component name');
  process.exit(1);
}

// Convert component name to PascalCase for the class name
const className = componentName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');

const componentDir = path.join(__dirname, '..', 'src', 'components', componentName);
fs.ensureDirSync(componentDir);

const componentFile = path.join(componentDir, `${componentName}.tsx`);
fs.writeFileSync(componentFile, `import { Component, Host, h } from '@stencil/core';

@Component({
  tag: '${componentName}',
  styleUrl: '${componentName}.scss',
})
export class ${className} {
  render() {
    return (
      <Host>
        <div>implement ${componentName}</div>
      </Host>
    );
  }
}
`);

const styleFile = path.join(componentDir, `${componentName}.scss`);
fs.writeFileSync(styleFile, `:host {
  display: block;
}
`);

// Create test directory
const testDir = path.join(componentDir, 'test');
fs.ensureDirSync(testDir);

// Create e2e test file
const e2eTestFile = path.join(testDir, `${componentName}.e2e.ts`);
fs.writeFileSync(e2eTestFile, `import { newE2EPage } from '@stencil/core/testing';

describe('${componentName}', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<${componentName}></${componentName}>');

    const element = await page.find('${componentName}');
    expect(element).toHaveClass('hydrated');
  });
});
`);

// Create spec test file
const specTestFile = path.join(testDir, `${componentName}.spec.tsx`);
fs.writeFileSync(specTestFile, `import { newSpecPage } from '@stencil/core/testing';
import { ${className} } from '../${componentName}';

describe('${componentName}', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [${className}],
      html: \`<${componentName}></${componentName}>\`,
    });
    expect(page.root).toEqualHtml(\`
      <${componentName}>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </${componentName}>
    \`);
  });
});
`);

const readmeFile = path.join(componentDir, 'readme.md');
fs.writeFileSync(readmeFile, `# ${componentName}\n`);

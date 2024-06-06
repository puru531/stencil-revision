[![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)](https://stenciljs.com)

# Stencil Component Starter

This is a starter project for building a standalone Web Component using Stencil.

Stencil is also great for building entire apps. For that, use the [stencil-app-starter](https://github.com/ionic-team/stencil-app-starter) instead.

# Stencil

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than runtime tool. Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all.

## Getting Started

To start building a new web component using Stencil, clone this repo to a new directory:

```bash
git clone https://github.com/ionic-team/stencil-component-starter.git my-component
cd my-component
git remote rm origin
```

and run:

```bash
npm install
npm start
```

To build the component for production, run:

```bash
npm run build
```

To run the unit tests for the components, run:

```bash
npm test
```

Need help? Check out our docs [here](https://stenciljs.com/docs/my-first-component).

## Naming Components

When creating new component tags, we recommend _not_ using `stencil` in the component name (ex: `<stencil-datepicker>`). This is because the generated component has little to nothing to do with Stencil; it's just a web component!

Instead, use a prefix that fits your company or any name for a group of related components. For example, all of the Ionic-generated web components use the prefix `ion`.

## Using this component

There are two strategies we recommend for using web components built with Stencil.

The first step for all two of these strategies is to [publish to NPM](https://docs.npmjs.com/getting-started/publishing-npm-packages).

You can read more about these different approaches in the [Stencil docs](https://stenciljs.com/docs/publishing).

### Lazy Loading

If your Stencil project is built with the [`dist`](https://stenciljs.com/docs/distribution) output target, you can import a small bootstrap script that registers all components and allows you to load individual component scripts lazily.

For example, given your Stencil project namespace is called `my-design-system`, to use `my-component` on any website, inject this into your HTML:

```html
<script type="module" src="https://unpkg.com/my-design-system"></script>
<!--
To avoid unpkg.com redirects to the actual file, you can also directly import:
https://unpkg.com/foobar-design-system@0.0.1/dist/foobar-design-system/foobar-design-system.esm.js
-->
<my-component first="Stencil" last="'Don't call me a framework' JS"></my-component>
```

This will only load the necessary scripts needed to render `<my-component />`. Once more components of this package are used, they will automatically be loaded lazily.

You can also import the script as part of your `node_modules` in your applications entry file:

```tsx
import 'foobar-design-system/dist/foobar-design-system/foobar-design-system.esm.js';
```

Check out this [Live Demo](https://stackblitz.com/edit/vitejs-vite-y6v26a?file=src%2Fmain.tsx).

### Standalone

If you are using a Stencil component library with `dist-custom-elements`, we recommend importing Stencil components individually in those files where they are needed.

To export Stencil components as standalone components make sure you have the [`dist-custom-elements`](https://stenciljs.com/docs/custom-elements) output target defined in your `stencil.config.ts`.

For example, given you'd like to use `<my-component />` as part of a React component, you can import the component directly via:

```tsx
import 'foobar-design-system/my-component';

function App() {
  return (
    <>
      <div>
        <my-component
          first="Stencil"
          last="'Don't call me a framework' JS"
        ></my-component>
      </div>
    </>
  );
}

export default App;
```

Check out this [Live Demo](https://stackblitz.com/edit/vitejs-vite-b6zuds?file=src%2FApp.tsx).



svg file blue color
```<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" fill="none">
<circle cx="100" cy="100" r="100" fill="white"/>
<path d="M200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100ZM25 100C25 141.421 58.5786 175 100 175C141.421 175 175 141.421 175 100C175 58.5786 141.421 25 100 25C58.5786 25 25 58.5786 25 100Z" fill="#DBD8D5"/>
<path d="M100 200C80.2219 200 60.8879 194.135 44.443 183.147C27.9981 172.159 15.1808 156.541 7.61204 138.268C0.0432817 119.996 -1.93705 99.8891 1.92147 80.491C5.78 61.0929 15.3041 43.2746 29.2893 29.2893C43.2746 15.3041 61.0929 5.77999 80.491 1.92147C99.8891 -1.93705 119.996 0.0432861 138.268 7.61205C156.541 15.1808 172.159 27.9981 183.147 44.443C194.135 60.8879 200 80.2219 200 100H175C175 85.1664 170.601 70.6659 162.36 58.3322C154.119 45.9986 142.406 36.3856 128.701 30.709C114.997 25.0325 99.9168 23.5472 85.3682 26.4411C70.8197 29.335 57.4559 36.478 46.967 46.967C36.4781 57.4559 29.335 70.8196 26.4411 85.3682C23.5472 99.9168 25.0325 114.997 30.709 128.701C36.3856 142.406 45.9985 154.119 58.3322 162.36C70.6659 170.601 85.1664 175 100 175L100 200Z" fill="#0080FF"/>
<path d="M100 200C80.2219 200 60.8879 194.135 44.443 183.147C27.9981 172.159 15.1808 156.541 7.61204 138.268C0.0432817 119.996 -1.93705 99.8891 1.92147 80.491C5.78 61.0929 15.3041 43.2746 29.2893 29.2893C43.2746 15.3041 61.0929 5.77999 80.491 1.92147C99.8891 -1.93705 119.996 0.0432861 138.268 7.61205C156.541 15.1808 172.159 27.9981 183.147 44.443C194.135 60.8879 200 80.2219 200 100H175C175 85.1664 170.601 70.6659 162.36 58.3322C154.119 45.9986 142.406 36.3856 128.701 30.709C114.997 25.0325 99.9168 23.5472 85.3682 26.4411C70.8197 29.335 57.4559 36.478 46.967 46.967C36.4781 57.4559 29.335 70.8196 26.4411 85.3682C23.5472 99.9168 25.0325 114.997 30.709 128.701C36.3856 142.406 45.9985 154.119 58.3322 162.36C70.6659 170.601 85.1664 175 100 175L100 200Z" fill="url(#paint0_linear_5382_36592)"/>
<defs>
<linearGradient id="paint0_linear_5382_36592" x1="77.5" y1="192" x2="180.5" y2="171" gradientUnits="userSpaceOnUse">
<stop stop-color="#0180FF"/>
<stop offset="0.260019" stop-color="#056FDD"/>
<stop offset="0.295" stop-color="#066ED9"/>
<stop offset="0.545" stop-color="#0A5DB8"/>
<stop offset="0.832716" stop-color="#0F4A92"/>
<stop offset="1" stop-color="#12407E"/>
</linearGradient>
</defs>
</svg>```

Green color
```<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" fill="none">
<circle cx="100" cy="100" r="100" fill="white"/>
<path d="M200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100ZM25 100C25 141.421 58.5786 175 100 175C141.421 175 175 141.421 175 100C175 58.5786 141.421 25 100 25C58.5786 25 25 58.5786 25 100Z" fill="#CCE6FF"/>
<path d="M200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100ZM25 100C25 141.421 58.5786 175 100 175C141.421 175 175 141.421 175 100C175 58.5786 141.421 25 100 25C58.5786 25 25 58.5786 25 100Z" fill="#29C45D"/>
<path d="M200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100ZM25 100C25 141.421 58.5786 175 100 175C141.421 175 175 141.421 175 100C175 58.5786 141.421 25 100 25C58.5786 25 25 58.5786 25 100Z" fill="url(#paint0_linear_5382_33585)"/>
<defs>
<linearGradient id="paint0_linear_5382_33585" x1="46" y1="15" x2="158" y2="178" gradientUnits="userSpaceOnUse">
<stop stop-color="#7AF0A4"/>
<stop offset="0.53" stop-color="#29C45D"/>
<stop offset="1" stop-color="#17A646"/>
</linearGradient>
</defs>
</svg>```

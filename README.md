# Vue Image Compare

[![npm](https://img.shields.io/npm/v/vue-image-compare2.svg?color=informational)](https://www.npmjs.com/package/vue-image-compare2)
[![npm](https://img.shields.io/npm/dt/vue-image-compare2.svg?color=informational)](https://www.npmjs.com/package/vue-image-compare2)
[![vue2](https://img.shields.io/badge/vue-2-brightgreen.svg?color=informational)](https://vuejs.org/)
[![Travis (.org)](https://img.shields.io/travis/shuunen/contacto.svg)](https://travis-ci.org/Shuunen/contacto)
[![David](https://img.shields.io/david/shuunen/contacto.svg)](https://david-dm.org/shuunen/contacto)
[![Mozilla HTTP Observatory Grade](https://img.shields.io/mozilla-observatory/grade/shuunen-contacto.netlify.com.svg?publish)](https://observatory.mozilla.org/analyze/shuunen-contacto.netlify.com)
[![LGTM Grade](https://img.shields.io/lgtm/grade/javascript/github/Shuunen/contacto.svg)](https://lgtm.com/projects/g/Shuunen/contacto/)
[![Website](https://img.shields.io/website/https/shuunen-contacto.netlify.com.svg)](https://shuunen-contacto.netlify.com)
[![GitHub license](https://img.shields.io/github/license/shuunen/contacto.svg?color=success)](https://github.com/Shuunen/contacto/blob/master/LICENSE)
[![BCH compliance](https://bettercodehub.com/edge/badge/Shuunen/contacto?branch=master)](https://bettercodehub.com/)

<!-- markdownlint-disable MD004 -->
- [Vue Image Compare](#vue-image-compare-2)
  - [Purpose of this fork](#purpose-of-this-fork)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Props](#props)
    - [Slots](#slots)
    - [Events](#events)
  - [Development](#development)
  - [Thanks](#thanks)
  - [License](#license)
<!-- markdownlint-enable MD004 -->

## Purpose of this fork

**Updates** (original repo seems dead) & new **features** :)

**simple images loading** via drag & drop files into browser, will load images locally (no upload to any server)

- drop 2 files
- drop 1 file on one side to change only one side of the comparison

**better image comparison**  to see details :

- allow click & drag
- allow zoom
- allow middle click to start flickering left image for seconds

You can see the updated features of this fork on : [https://image-compare.netlify.com](https://image-compare.netlify.com)

And still check the original author website : [https://marcincichocki.github.io/vue-image-compare](https://marcincichocki.github.io/vue-image-compare)

## Installation

```bash
yarn add vue-image-compare2
# or
npm i vue-image-compare2 --save
```

## Usage

- register the component **Globally** :

```javascript
import Vue from 'vue'
import imageCompare from 'vue-image-compare2'

new Vue({
    components: {
        imageCompare
    },
    data() {
        return {
            before: '/img/before.jpg',
            after: '/img/after.jpg'
        }
    }
}).$mount('#app')
```

or **locally** :

```javascript
import imageCompare from 'vue-image-compare2'

export default {
   data() {
    return {
      before: '/img/before.jpg',
      after: '/img/after.jpg'
    }
  },
  components: {
    imageCompare
  }
}
```

- Then you can use `image-compare` with a minimal init :

```html
<div id="app">
    <image-compare :before="before" :after="after"/>
</div>
```

or with some optionals params, like in [demo folder](https://github.com/Shuunen/vue-image-compare/tree/master/demo) :

```html
<div id="app">
    <image-compare :before="before" :after="after" full isZoomable isSwitchable isDraggable>
      <i class="fa fa-angle-left" aria-hidden="true" slot="icon-left"></i>
      <i class="fa fa-angle-right" aria-hidden="true" slot="icon-right"></i>
    </image-compare>
</div>
```

### Props

| Name           | Type      | Default                    | Description                 |
| -------------- | --------- | -------------------------- | --------------------------- |
| `before`       | `String`  | `undefined` (**required**) | path to the image *before*  |
| `after`        | `String`  | `undefined` (**required**) | path to the image *after*   |
| `full`         | `Boolean` | `false`                    | stretch images (1)          |
| `padding`      | `Object`  | `{left: 0, right: 0}`      | left and right padding (2)  |
| `hideAfter`    | `Boolean` | `false`                    | hide the after image        |
| `zoom`         | `Object`  | `{min: 0.5, max: 2}`       | scale image by              |
| `reset`        | `Boolean` | `false`                    | reset all to original       |
| `isZoomable`   | `Boolean` | `false`                    | mouse wheel to zoom in/out  |
| `isDraggable`  | `Boolean` | `false`                    | allow moving the comparison |
| `isSwitchable` | `Boolean` | `false`                    | allow drag & drop           |
| `hideHandle`   | `Boolean` | `false`                    | hide vertical handle bar    |
| `labels`       | `Object`  | `{after: '', before: ''}`  | comparison labels           |

(1) : Determines if images are stretched to fill parent element. Can be used with help of CSS object-fit: cover to create full page image comparison

(2) : Set left and right "padding" in pixels, so handle can not reach edge of an image

### Slots

- `icon-left` - element to be placed on the left side of the handle
- `icon-right` - element to be placed on the right side of the handle

Example:

```html
<image-compare before="/img/before.jpg" after="/img/after.jpg">
    <i class="fa fa-angle-left" aria-hidden="true" slot="icon-left"></i>
    <i class="fa fa-angle-right" aria-hidden="true" slot="icon-right"></i>
</image-compare>
```

### Events

- `@movement` - when image/handle is dragged left/right

## Development

To contribute or try this component :

- clone this repo
- install dependencies : `yarn install`
- start dev task : `yarn dev`

## Thanks

- [ctf0](https://github.com/ctf0) : for his multiple contributions :heart:

## License

[MIT](/LICENSE)

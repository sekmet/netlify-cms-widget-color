# netlify-cms-widget-color

A Collection of Color Pickers from Sketch, Photoshop, Chrome, Github, Twitter, Material Design & more widget for Netlify CMS.

[![npm version](https://badge.fury.io/js/netlify-cms-widget-color.svg)](https://badge.fury.io/js/netlify-cms-widget-color)
[![GitHub version](https://badge.fury.io/gh/sekmet%2Fnetlify-cms-widget-color.svg)](https://badge.fury.io/gh/sekmet%2Fnetlify-cms-widget-color)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)


## Install

As an npm package:

```shell
yarn add netlify-cms-widget-color

OR

npm install --save netlify-cms-widget-color
```

```js
import NetlifyCmsWidgetColor from 'netlify-cms-widget-color';

CMS.registerWidget([
  NetlifyCmsWidgetColor.Widget()
])
```

## How to use

Add to your Netlify CMS configuration:

```yaml
    fields:
      - { name: <fieldname>, label: <fieldlabel>, widget: color }
```



## Support

For help with this widget, open an [issue](https://github.com/sekmet/netlify-cms-widget-color) or ask the Netlify CMS community in [Gitter](https://gitter.im/netlify/netlifycms).

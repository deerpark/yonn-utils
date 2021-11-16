# yonn-utils

> A tiny (53B) utility for me

This module is available in three formats:

- **ES Module**: `dist/yonn-utils.m.js`
- **CommonJS**: `dist/yonn-utils.js`
- **UMD**: `dist/yonn-utils.min.js`

## Install

```
$ npm install --save yonn-utils
```

## Usage

```js
import yonnUtils from "yonn-utils";

// Strings (variadic)
yonnUtils("foo", true && "bar", "baz");
//=> 'foo bar baz'
```

## Support

All versions of Node.js are supported.

All browsers that support [`Array.isArray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray#Browser_compatibility) are supported (IE9+).

## License

MIT © [deerpark](https://deerpark.github.io)

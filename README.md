<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# reviveError

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Revive a JSON-serialized [error][@stdlib/error/to-json] object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import reviveError from 'https://cdn.jsdelivr.net/gh/stdlib-js/error-reviver@esm/index.mjs';
```

#### reviveError( key, value )

Revives a JSON-serialized [error][@stdlib/error/to-json] object.

```javascript
import parseJSON from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-parse-json@esm/index.mjs';

var str = '{"type":"TypeError","message":"beep"}';

var err = parseJSON( str, reviveError );
// returns <TypeError>
```

For details on the JSON serialization format, see [`@stdlib/error/to-json`][@stdlib/error/to-json].

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Supported built-in [`error`][mdn-error] types:

    -   [`Error`][mdn-error]
    -   [`URIError`][mdn-uri-error]
    -   [`ReferenceError`][mdn-reference-error]
    -   [`SyntaxError`][mdn-syntax-error]
    -   [`RangeError`][mdn-range-error]
    -   [`EvalError`][mdn-eval-error]
    -   [`TypeError`][mdn-type-error]

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import parseJSON from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-parse-json@esm/index.mjs';
import err2json from 'https://cdn.jsdelivr.net/gh/stdlib-js/error-to-json@esm/index.mjs';
import reviveError from 'https://cdn.jsdelivr.net/gh/stdlib-js/error-reviver@esm/index.mjs';

var err1 = new SyntaxError( 'bad syntax' );
// returns <SyntaxError>

var json = err2json( err1 );
/* e.g., returns
    {
        'type': 'SyntaxError',
        'name': 'SyntaxError',
        'message': 'bad syntax',
        'stack': '...'
    }
*/

var str = JSON.stringify( json );
// e.g., returns '{"type":"SyntaxError","name":"SyntaxError","message":"bad syntax","stack":"..."}'

var err2 = parseJSON( str, reviveError );
// returns <SyntaxError>

var bool = ( err1.message === err2.message );
// returns true

bool = ( err1.stack === err2.stack );
// returns true

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/error/to-json`][@stdlib/error/to-json]</span><span class="delimiter">: </span><span class="description">return a JSON representation of an error object.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/error-reviver.svg
[npm-url]: https://npmjs.org/package/@stdlib/error-reviver

[test-image]: https://github.com/stdlib-js/error-reviver/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/error-reviver/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/error-reviver/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/error-reviver?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/error-reviver.svg
[dependencies-url]: https://david-dm.org/stdlib-js/error-reviver/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/error-reviver/tree/deno
[umd-url]: https://github.com/stdlib-js/error-reviver/tree/umd
[esm-url]: https://github.com/stdlib-js/error-reviver/tree/esm
[branches-url]: https://github.com/stdlib-js/error-reviver/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/error-reviver/main/LICENSE

[mdn-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

[mdn-type-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError

[mdn-syntax-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError

[mdn-range-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError

[mdn-reference-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError

[mdn-uri-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError

[mdn-eval-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/EvalError

[@stdlib/error/to-json]: https://github.com/stdlib-js/error-to-json/tree/esm

</section>

<!-- /.links -->

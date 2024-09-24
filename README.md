# mdtocify

It generates a markdown TOC (table of contents) based on the headings of the given markdown content. It is simple and useful for generating a custom TOC. It is fully written in Typescript.

## Install

```sh
npm install mdtocify
```

## Usage

> It only supports ES module import.

```js
import { toc } from 'mdtocify';

toc('# One\n\n# Two')
// Results in:
// [ { content: 'One', slug: 'one', lvl: 1 }, { content: 'Two', slug: 'two', lvl: 1 } ]
```

## Options

- `minDepth` - Minimum heading depth to include in TOC. Default is 1.
- `maxDepth` - Maximum heading depth to include in TOC. Default is 6.
- `skip` - Heading exactly matching this string will be skipped. (Optional)
- `filter` - Function to filter out headings. (Optional)

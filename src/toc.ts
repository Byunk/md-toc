import Slugger from "github-slugger";
import { toString } from "mdast-util-to-string";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { visit } from "unist-util-visit";
import { Options, defaultOptions } from "./options.js";
import { toExpression } from "./to-expression.js";

interface TocItem {
  content: string;
  slug: string;
  lvl: number;
}

const slugger = new Slugger();

export function toc(str: string, options?: Partial<Options>) {
  options = defaultOptions(options);
  const skip = options.skip ? toExpression(options.skip) : null;

  const tree = unified().use(remarkParse).parse(str);

  const result: TocItem[] = [];

  slugger.reset();

  visit(tree, "heading", function (node, index, parent) {
    const content = toString(node, { includeImageAlt: false });
    const slug = slugger.slug(content);
    const lvl = node.depth;

    if (
      (!options.minDepth || lvl >= options.minDepth) &&
      (!options.maxDepth || lvl <= options.maxDepth) &&
      (!skip || !skip.test(content)) &&
      (!options.filter || options.filter(content) === false)
    )
      result.push({ content: content, slug: slug, lvl: lvl });
  });

  return result;
}

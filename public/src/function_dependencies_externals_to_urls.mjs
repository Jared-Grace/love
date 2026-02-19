import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { properties_from } from "../../../love/public/src/properties_from.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
export function function_dependencies_externals_to_urls(externals) {
  let o = null;
  const pb = "prettier";
  let includes = list_includes(externals, pb);
  if (includes) {
    o = {
      [pb]: "https://unpkg.com/prettier@3.7.4/standalone.mjs",
      parserBabel: "https://unpkg.com/prettier@3.7.4/plugins/babel.mjs",
      parserEstree: "https://unpkg.com/prettier@3.7.4/plugins/estree.mjs",
    };
    list_remove(externals, pb);
  } else {
    o = {};
  }
  const lookup = {
    acorn: "https://cdn.jsdelivr.net/npm/acorn/dist/acorn.mjs",
    astring: "https://cdn.jsdelivr.net/npm/astring/dist/astring.mjs",
    "lz-string": "https://cdn.jsdelivr.net/npm/lz-string@1.5.0/+esm",
  };
  let r = properties_from(o, externals, lookup);
  return r;
}

import { list_random_item } from "../../../love/public/src/list_random_item.mjs";
import { object_properties_from } from "../../../love/public/src/object_properties_from.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
export function function_dependencies_externals_to_urls(externals) {
  let o = null;
  let includes = list_includes(externals, "prettier/plugins/babel");
  if (includes) {
    o = {
      parserBabel: "https://unpkg.com/prettier@3.7.4/plugins/babel.mjs",
      parserEstree: "https://unpkg.com/prettier@3.7.4/plugins/estree.mjs",
    };
    let r2 = list_random_item(list);
  } else {
  }
  const lookup = {
    acorn: "https://cdn.jsdelivr.net/npm/acorn/dist/acorn.mjs",
    astring: "https://cdn.jsdelivr.net/npm/astring/dist/astring.mjs",
    "lz-string": "https://cdn.jsdelivr.net/npm/lz-string@1.5.0/+esm",
    prettier: "https://unpkg.com/prettier@3.7.4/standalone.mjs",
  };
  let r = object_properties_from(o, externals, lookup);
  return r;
}

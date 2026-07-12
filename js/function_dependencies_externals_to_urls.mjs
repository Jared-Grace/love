import { list_remove } from "./list_remove.mjs";
import { properties_from } from "./properties_from.mjs";
import { list_includes } from "./list_includes.mjs";
export function function_dependencies_externals_to_urls(externals) {
  let o = null;
  let pb = "prettier";
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
  let lookup = {
    acorn: "https://cdn.jsdelivr.net/npm/acorn/dist/acorn.mjs",
    astring: "https://cdn.jsdelivr.net/npm/astring/dist/astring.mjs",
    "lz-string": "https://cdn.jsdelivr.net/npm/lz-string@1.5.0/+esm",
    luxon: "https://esm.sh/luxon",
    "firebase/app": "https://esm.sh/firebase@12.10.0/app",
    "firebase/auth": "https://esm.sh/firebase@12.10.0/auth",
    "firebase/storage": "https://esm.sh/firebase@12.10.0/storage",
  };
  let r = properties_from(o, externals, lookup);
  return r;
}

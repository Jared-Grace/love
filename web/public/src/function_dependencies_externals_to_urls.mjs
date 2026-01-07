import { object_properties_from } from "../../../love/public/src/object_properties_from.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
export function function_dependencies_externals_to_urls(externals) {
  const lookup = {
    acorn: "https://cdn.jsdelivr.net/npm/acorn/dist/acorn.mjs",
    astring: "https://cdn.jsdelivr.net/npm/astring/dist/astring.mjs",
    "lz-string": "https://cdn.jsdelivr.net/npm/lz-string@1.5.0/+esm",
    prettier: "https://unpkg.com/prettier@3.7.4/standalone.mjs",
  };
  marker("1");
  let to = object_properties_from({}, externals, lookup);
  let r = null;
  let includes = list_includes(list, "prettier/plugins/babel");
  if (includes) {
    r = {
      parserBabel: "https://unpkg.com/prettier@3.7.4/plugins/babel.mjs",
      parserEstree: "https://unpkg.com/prettier@3.7.4/plugins/estree.mjs",
    };
  } else {
  }
  return to;
}

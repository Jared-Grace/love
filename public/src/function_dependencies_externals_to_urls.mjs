import { object_properties_from_empty } from "../../../love/public/src/object_properties_from_empty.mjs";
export function function_dependencies_externals_to_urls(externals) {
  let to = object_properties_from_empty(
    {
      acorn: "https://cdn.jsdelivr.net/npm/acorn/dist/acorn.mjs",
      astring: "https://cdn.jsdelivr.net/npm/astring/dist/astring.mjs",
      "lz-string": "https://cdn.jsdelivr.net/npm/lz-string@1.5.0/+esm",
    },
    externals,
  );
  return to;
}

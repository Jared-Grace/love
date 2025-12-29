import { object_properties_from_empty } from "../../../love/public/src/object_properties_from_empty.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { html_code_script_module_generic } from "../../../love/public/src/html_code_script_module_generic.mjs";
import { json_format_to } from "./json_format_to.mjs";
export function html_code_script_importmap(externals) {
  let imports = object_properties_from_empty(
    {
      acorn: "https://cdn.jsdelivr.net/npm/acorn/dist/acorn.mjs",
      astring: "https://cdn.jsdelivr.net/npm/astring/dist/astring.mjs",
      "lz-string": "https://cdn.jsdelivr.net/npm/lz-string@1.5.0/+esm",
    },
    externals,
  );
  marker("1");
  let j = json_format_to({
    imports,
  });
  const script_type = "importmap";
  let importmap = html_code_script_module_generic(script_type, j);
  return importmap;
}

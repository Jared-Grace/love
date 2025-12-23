import { marker } from "../../../love/public/src/marker.mjs";
import { html_code_script_module_generic } from "../../../love/public/src/html_code_script_module_generic.mjs";
import { json_format_to } from "./json_format_to.mjs";
export function html_code_script_importmap(imports) {
  marker("1");
  let j = json_format_to({
    imports,
  });
  const script_type = "importmap";
  let importmap = html_code_script_module_generic(script_type, j);
  return importmap;
}

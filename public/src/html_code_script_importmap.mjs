import { marker } from "../../../love/public/src/marker.mjs";
import { html_code_script_module_generic } from "../../../love/public/src/html_code_script_module_generic.mjs";
export function html_code_script_importmap(middle) {
  marker("1");
  const script_type = "importmap";
  let code = html_code_script_module_generic(script_type, middle);
  return code;
}

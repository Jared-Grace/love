import { html_code_script_module_generic } from "../../../love/public/src/html_code_script_module_generic.mjs";
export function html_code_script_module(middle) {
  const script_type = "module";
  let script = html_code_script_module_generic(script_type, middle);
  return script;
}

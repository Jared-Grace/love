import { html_code_script_src } from "./html_code_script_src.mjs";
import { file_name_js } from "./file_name_js.mjs";
export function html_code_script_src_js(f_name) {
  let src = file_name_js(f_name);
  let c = html_code_script_src(src);
  return c;
}

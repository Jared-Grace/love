import { html_code_script_src } from "../../../love/public/src/html_code_script_src.mjs";
import { file_name_js } from "../../../love/public/src/file_name_js.mjs";
export function html_code_script_src_js(f_name) {
  let src = file_name_js(f_name);
  let c = html_code_script_src(src);
  return c;
}

import { html_code_script_src } from "./html_code_script_src.mjs";
import { file_name_js } from "./file_name_js.mjs";
import { text_combine } from "./text_combine.mjs";
export function html_code_script_src_js_version(f_name, version_query) {
  let name = file_name_js(f_name);
  let src = text_combine(name, version_query);
  let c = html_code_script_src(src);
  return c;
}

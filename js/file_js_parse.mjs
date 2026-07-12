import { file_read } from "./file_read.mjs";
import { js_parse_async } from "./js_parse_async.mjs";
export async function file_js_parse(f_path) {
  let code = await file_read(f_path);
  let ast = await js_parse_async(code);
  let parsed = {
    ast,
    code,
    f_path,
  };
  return parsed;
}

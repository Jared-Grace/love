import { file_read } from "../../../love/public/src/file_read.mjs";
import { js_parse_async } from "../../../love/public/src/js_parse_async.mjs";
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

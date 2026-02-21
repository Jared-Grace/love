import { file_read } from "../../../love/public/src/file_read.mjs";
import { js_parse_async } from "../../../love/public/src/js_parse_async.mjs";
export async function file_js_parse(f_path) {
  let code = await file_read(f_path);
  const ast = await js_parse_async(code);
  const parsed = {
    ast,
    code,
    f_path,
  };
  return parsed;
}

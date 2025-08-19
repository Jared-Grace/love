import { file_read } from "./file_read.mjs";
import { js_parse } from "./js_parse.mjs";
export async function file_js_parse(f_path) {
  let code = await file_read(f_path);
  const ast = js_parse(code);
  const parsed = {
    ast,
    code,
    f_path,
  };
  return parsed;
}

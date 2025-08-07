import { file_read } from "./file_read.mjs";
import { js_parse } from "./js_parse.mjs";

export async function file_js_parse(f_path) {
  let code = await file_read(f_path);
  return js_parse(code);
}

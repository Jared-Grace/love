import { file_read } from "./file_read.mjs";

export async function file_js_parse(f_path) {
  let code = await file_read(f_path);
}

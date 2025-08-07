import { file_overwrite } from "./file_overwrite.mjs";
import { js_unparse } from "./js_unparse.mjs";

export async function file_js_unparse(f_path, parsed) {
  let code = js_unparse(parsed);
  await file_overwrite(f_path, code);
}

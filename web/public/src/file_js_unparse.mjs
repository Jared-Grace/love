import { file_overwrite } from "./file_overwrite.mjs";
import { js_unparse } from "./js_unparse.mjs";

export async function file_js_unparse(parsed) {
    let {f_path, ast, code} = parsed;
  let code_new = js_unparse(ast);
  if (code_new===code) {
    return;
  }
  await file_overwrite(f_path, code_new);
}

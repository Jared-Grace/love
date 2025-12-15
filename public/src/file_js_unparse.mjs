import { marker } from "../../../love/public/src/marker.mjs";
import { file_overwrite } from "../../../love/public/src/file_overwrite.mjs";
import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
import { js_format } from "../../../love/public/src/js_format.mjs";
export async function file_js_unparse(parsed) {
  marker("1");
  let { f_path, ast, code } = parsed;
  let code_unparsed = await js_unparse(ast);
  let code_new = await js_format(code_unparsed);
  if (code_new === code) {
    return;
  }
  await file_overwrite(f_path, code_new);
}

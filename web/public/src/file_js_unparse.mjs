import { data_identifiers_file } from "./data_identifiers_file.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { js_format } from "./js_format.mjs";
export async function file_js_unparse(parsed) {
  let { f_path, ast, code } = parsed;
  let code_unparsed = await js_unparse(ast);
  let code_new = await js_format(code_unparsed);
  if (code_new === code) {
    return;
  }
  await file_overwrite(f_path, code_new);
  let v = await data_identifiers_file(parsed);
}

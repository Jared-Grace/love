import { js_code_declaration } from "./js_code_declaration.mjs";
import { file_write } from "./file_write.mjs";
import { assert_file_exists_not } from "./assert_file_exists_not.mjs";
import { function_open } from "./function_open.mjs";
import { js_code_call } from "./js_code_call.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { file_open } from "./file_open.mjs";
export async function function_delete(f_name) {
  const f_path = function_name_to_path(f_name);
  const contents = "export " + js_code_declaration(f_name, "", false);
  await file_write(f_path, contents);
  await function_open(f_name);
}

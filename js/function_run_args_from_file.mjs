import { list_is_assert } from "./list_is_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { function_run } from "./function_run.mjs";
export async function function_run_args_from_file(f_name, args_path) {
  let args = await file_read_json(args_path);
  list_is_assert(args);
  let r = await function_run(f_name, args);
  return r;
}

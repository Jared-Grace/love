import { app_shared_renames_path } from "./app_shared_renames_path.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
export async function app_shared_renames() {
  arguments_assert(arguments, 0);
  ("Every app rename so far, each one its old short name and its new, oldest first.");
  let path = app_shared_renames_path();
  let r = await file_read_json(path);
  return r;
}

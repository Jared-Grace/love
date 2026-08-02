import { file_transform_replace } from "./file_transform_replace.mjs";
import { function_name_to_path_found } from "./function_name_to_path_found.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function function_source_replace(f_name, from, to) {
  arguments_assert(arguments, 3);
  let f_path = await function_name_to_path_found(f_name);
  await file_transform_replace(f_path, from, to);
}

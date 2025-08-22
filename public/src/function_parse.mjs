import { function_name_to_path_unalias } from "./function_name_to_path_unalias.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { object_merge } from "./object_merge.mjs";
export async function function_parse(f_name) {
  const { f_path, unaliased } = await function_name_to_path_unalias(f_name);
  let parsed = await file_js_parse(f_path);
  return object_merge(
    {
      unaliased,
    },
    parsed,
  );
}

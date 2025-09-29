import { function_name_to_path_unalias } from "../../../love/public/src/function_name_to_path_unalias.mjs";
import { file_js_parse } from "../../../love/public/src/file_js_parse.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
export async function function_parse(f_name) {
  const { f_path, unaliased } = await function_name_to_path_unalias(f_name);
  let parsed = await file_js_parse(f_path);
  let to = object_merge(
    {
      unaliased,
    },
    parsed,
  );
  return to;
}

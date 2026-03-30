import { property_get } from "../../../love/public/src/property_get.mjs";
import { function_name_to_path_search } from "../../../love/public/src/function_name_to_path_search.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { text_replace_curried_right_2 } from "../../../love/public/src/text_replace_curried_right_2.mjs";
import { file_transform } from "../../../love/public/src/file_transform.mjs";
export async function function_source_replace(f_name, from, to) {
  arguments_assert(arguments, 3);
  let r3 = await function_name_to_path_search(f_name);
  let f_path = property_get(r3, "f_path");
  let r2 = text_replace_curried_right_2(from, to);
  let r = await file_transform(f_path, r2);
}

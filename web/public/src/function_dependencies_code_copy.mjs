import { text_split_comma_dot } from "../../../love/public/src/text_split_comma_dot.mjs";
import { function_dependencies_code_multiple } from "../../../love/public/src/function_dependencies_code_multiple.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { clipboard_copy } from "../../../love/public/src/clipboard_copy.mjs";
import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
export async function function_dependencies_code_copy(f_name) {
  arguments_assert(arguments, 1);
  let unaliased = await function_name_unalias_only(f_name);
  let split = text_split_comma_dot(t);
  let v = await function_dependencies_code_multiple(unaliased);
  let code = property_get(v, "code");
  await clipboard_copy(code);
}

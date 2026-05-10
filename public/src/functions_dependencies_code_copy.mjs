import { functions_dependencies_code_copy_split } from "../../../love/public/src/functions_dependencies_code_copy_split.mjs";
import { text_split_comma_dot } from "../../../love/public/src/text_split_comma_dot.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
export async function functions_dependencies_code_copy(f_names) {
  arguments_assert(arguments, 1);
  let split = text_split_comma_dot(f_names);
  await functions_dependencies_code_copy_split(split);
}

import { clipboard_copy } from "./clipboard_copy.mjs";
import { functions_dependencies_code_split } from "./functions_dependencies_code_split.mjs";
import { text_split_comma_dot } from "./text_split_comma_dot.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function functions_dependencies_code_copy(f_names) {
  arguments_assert(arguments, 1);
  let split = text_split_comma_dot(f_names);
  let code = await functions_dependencies_code_split(split);
  await clipboard_copy(code);
}

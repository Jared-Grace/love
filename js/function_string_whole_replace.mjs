import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { json_to } from "./json_to.mjs";
import { js_strings_code_replace_generic } from "./js_strings_code_replace_generic.mjs";
import { function_transform } from "./function_transform.mjs";
export async function function_string_whole_replace(
  f_name,
  text_before,
  text_after,
) {
  "$plain text_before";
  "$plain text_after";
  "A written-out value equal to one whole text becomes another, in one function. Prose and frozen values are left alone, and so is a longer value that only contains it, which is the difference from swapping one underscore-separated word.";
  arguments_assert(arguments, 3);
  let changed = 0;
  function code_or_null(value) {
    if (equal(value, text_before)) {
      let json = json_to(text_after);
      return json;
    }
    return null;
  }
  async function lambda(ast) {
    changed = await js_strings_code_replace_generic(ast, code_or_null);
  }
  await function_transform(f_name, lambda);
  return changed;
}

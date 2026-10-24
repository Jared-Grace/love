import { arguments_assert } from "./arguments_assert.mjs";
import { js_strings_text_replace } from "./js_strings_text_replace.mjs";
import { equal_assert_json } from "./equal_assert_json.mjs";
import { function_transform_auto } from "./function_transform_auto.mjs";
export async function function_strings_text_replace(
  f_name,
  text_before,
  text_after,
) {
  "Makes the one written-out piece of text in a function that says one thing exactly say another instead.";
  "THE WHOLE TEXT HAS TO MATCH, AND EXACTLY ONE MAY. A value a function compares against is the thing that goes stale when what it watches is renamed, and the repair is one value; finding none means the text is spelled otherwise, and finding several means the change is bigger than this command and wants reading.";
  arguments_assert(arguments, 3);
  function lambda(ast) {
    let replaced = js_strings_text_replace(ast, text_before, text_after);
    equal_assert_json(replaced, 1, {
      f_name,
      text_before,
      replaced,
    });
  }
  let output = await function_transform_auto(f_name, lambda);
  return output;
}

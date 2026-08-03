import { arguments_assert } from "./arguments_assert.mjs";
import { function_transform } from "./function_transform.mjs";
import { js_lesson_rights_space_strip } from "./js_lesson_rights_space_strip.mjs";
import { greater_than_equal_assert_json } from "./greater_than_equal_assert_json.mjs";
export async function function_lesson_rights_space_strip(f_name) {
  arguments_assert(arguments, 1);
  ("takes the leading space off one lesson's own name-words, and refuses a file that had none to take");
  ("The refusal is the whole reason this is a command of its own rather than a line");
  ("inside the sweep. Named by hand it can be pointed at the wrong lesson, and a");
  ("lesson with nothing to strip would otherwise be rewritten byte-for-byte and");
  ("committed under a message saying a space had been removed.");
  let stripped = 0;
  function lambda(ast) {
    stripped = js_lesson_rights_space_strip(ast);
    greater_than_equal_assert_json(stripped, 1, {
      hint: "no word this lesson hands over as its own name-words starts with a space, so there was nothing to take off — is this the lesson you meant?",
      f_name,
    });
  }
  await function_transform(f_name, lambda);
  let told = {
    f_name,
    stripped,
  };
  return told;
}

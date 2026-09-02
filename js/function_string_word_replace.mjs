import { arguments_assert } from "./arguments_assert.mjs";
import { js_string_word_replace } from "./js_string_word_replace.mjs";
import { function_transform } from "./function_transform.mjs";
import { function_auto } from "./function_auto.mjs";
export async function function_string_word_replace(
  f_name,
  word_before,
  word_after,
) {
  arguments_assert(arguments, 3);
  ("Swaps one underscore-separated word for another inside every written-out string of ONE function, and says whether anything moved.");
  ("A failure is reported rather than thrown. This runs under a sweep over the whole repo while other hands edit the same folder, so a file that cannot be parsed at the moment it is read is ordinary rather than exceptional - and throwing would discard every rewrite already paid for.");
  ("The normalize pass is asked only for the files that moved. A file nothing matched in is left byte-identical rather than reformatted as a side effect of being looked at, and every one of those is a file some peer may have open.");
  ("The caught thing is not named error, because that is the name of a function here and the import repair would bind it and write an import for it.");
  let changed = false;
  let error_message = "";
  try {
    function ast_replace(ast) {
      let did = js_string_word_replace(ast, word_before, word_after);
      changed = did;
    }
    await function_transform(f_name, ast_replace);
    if (changed) {
      await function_auto(f_name);
    }
  } catch (e) {
    error_message = e.message;
  }
  let result = {
    name: f_name,
    changed: changed,
    error_message: error_message,
  };
  return result;
}

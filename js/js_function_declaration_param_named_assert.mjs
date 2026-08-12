import { arguments_assert } from "./arguments_assert.mjs";
import { js_function_declaration_params_names_plain } from "./js_function_declaration_params_names_plain.mjs";
import { list_includes } from "./list_includes.mjs";
import { assert_json } from "./assert_json.mjs";
export function js_function_declaration_param_named_assert(
  declaration,
  f_name,
  name,
) {
  arguments_assert(arguments, 3);
  ("Insist that a function really has a parameter of the name it is about to be asked about, and say which ones it does have when it does not.");
  ("Renaming a word a function never binds is not an error to the pass underneath, which walks the body, finds nothing to change and reports a clean run. So a mistyped parameter name comes back looking exactly like a rename that worked, and this is the only line between the two.");
  ("It is asked of the declaration rather than of a name, so the same question serves the command that reaches the whole repo and the folder-sized twin the corpus runs in a temporary directory. Held in one place, the two cannot come to disagree about what counts as a parameter - which is the way a twin stops being a twin.");
  ("An unpacked parameter's pieces do not count. A piece is a key of an object the caller built, so it is not a name this function chose and cannot be respelled without reaching outside it.");
  let params = js_function_declaration_params_names_plain(declaration);
  let named = list_includes(params, name);
  assert_json(named, {
    hint: "this function has no parameter of that name, and reaching for a word it never binds would quietly do nothing at all - would you like to check the spelling against the list here?",
    f_name,
    name,
    params,
  });
}

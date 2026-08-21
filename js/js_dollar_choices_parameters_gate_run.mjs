import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_dollar_choices_parameters_unknown } from "./js_dollar_choices_parameters_unknown.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function js_dollar_choices_parameters_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: every dollar-macro asks only for things the expander actually hands it.");
  ("It holds at nothing rather than at a list that may only shrink, because a name asked for in vain is never right and there is no stock of old ones to work off. Eleven were found the day this was written and all eleven were mended before it was added, so the line it holds is the line it starts on.");
  ("What it catches cannot be caught by running anything. A macro runs only when a person types one, and a person who types one and is told that nothing cannot be turned into an object reads that as their own mistake. Nine macros stood dead for as long as it took somebody to type one and not report it.");
  ("Both sides are read from the code, so this goes red when either changes and is not a copy of either that could quietly fall behind.");
  ("Throws so the dispatcher seam exits nonzero.");
  let rows = await js_dollar_choices_parameters_unknown();
  list_empty_is_assert_json(rows, {
    hint: text_combine_multiple([
      "these dollar-macros unpack a name the expander does not put in the record it hands them, so each one receives nothing under that name and fails on the line that uses it - either add the name to the record ",
      fn_name("js_dollar"),
      " builds, or unpack the name that is really there and bind it to whatever the body already calls it",
    ]),
    rows,
  });
  let r = {
    pass: true,
  };
  return r;
}

import { app_code_quiz_unscramble_unwritable } from "./app_code_quiz_unscramble_unwritable.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_quiz_unscramble_gate_run() {
  "Gate: every unscramble the code lessons can ask, the screen can also show the learner's progress through. Throws so the dispatcher seam exits nonzero.";
  "This one was paid for. The writing-out was a parse and an unparse, which drops a bracket a tree does not need, and the screen then searched the written code for each token the learner had pressed. Four lessons about brackets threw at the learner, on the press that was RIGHT, and the crawler that walks every lesson and every quiz kind reported nothing wrong - it loads screens and never presses a tile. So the fault was invisible from here and only a person on a phone could find it.";
  "A gate is the cheap end of that. It asks the lessons what they can ask, rather than a person to go and press things.";
  let unwritable = app_code_quiz_unscramble_unwritable();
  let f_name = fn_name("js_tokens_to_code");
  let hint = text_combine_multiple([
    "these lessons can ask an unscramble whose tokens do not survive ",
    f_name,
    " - the learner is shown a throw instead of their answer",
  ]);
  list_empty_is_assert_json(unwritable, {
    hint,
  });
  let r = {
    unwritable: 0,
  };
  return r;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_forwards_wrong_say } from "./app_learn_js_forwards_wrong_say.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { catch_null } from "./catch_null.mjs";
import { null_is } from "./null_is.mjs";
import { app_learn_js_wrong_programs_wrong_say } from "./app_learn_js_wrong_programs_wrong_say.mjs";
export function app_learn_js_forwards_wrong_say_programs(
  backwards_decoys,
  question,
  answer,
  choice,
) {
  arguments_assert(arguments, 4);
  ("said when a learner picks a wrong output: the reminders every code lesson has first, unchanged, and only when none speaks, the lines where the wrong program that writes out the pick differs. The wrong programs are the ones the lesson's backwards quiz offers for this program, asked with the answer as its question and this program as its answer.");
  ("2026-11-25: last, so a lesson that already said something says the same as before.");
  let said = app_learn_js_forwards_wrong_say(question, answer, choice);
  if (null_not_is(said)) {
    return said;
  }
  function programs_get() {
    let found = backwards_decoys(answer, question);
    return found;
  }
  let programs = catch_null(programs_get);
  if (null_is(programs)) {
    return null;
  }
  let parts = app_learn_js_wrong_programs_wrong_say(programs, question, choice);
  return parts;
}

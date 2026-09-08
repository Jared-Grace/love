import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lessons_fns } from "./app_code_lessons_fns.mjs";
import { list_size } from "./list_size.mjs";
import { app_code_lesson_titles_lower } from "./app_code_lesson_titles_lower.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_empty_is_assert_walked_generic } from "./list_empty_is_assert_walked_generic.mjs";
export function app_code_lesson_titles_capital_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate for the lessons list: every lesson title opens with a capital after its category word. Functions: Smaller of two Math.min, never Functions: smaller of two Math.min.");
  ("The list of lessons is the first thing a learner reads, and a list where some names open with a capital and some do not reads as two lists that got shuffled together. Nobody decided that split - it is what happens when each title is written on its own day and nothing says which way.");
  ("IT RATCHETS AGAINST NOTHING. Forty eight titles were small the first time anybody looked and all forty eight were changed the same day, so a shrink-only record would hold nothing and exist only to say so.");
  ("A title opening with code is not a fault and is not counted, and the reading knows that from the drawing rather than from a list of exceptions. console.log and true and !== are spelled the way JavaScript spells them, and a capital would make each one a different word.");
  ("How many lessons were looked at travels out beside the verdict, because nothing wrong is also what this says on the day its walk stopped reaching any lessons at all.");
  let fns = app_code_lessons_fns();
  let walked = list_size(fns);
  let offenders = app_code_lesson_titles_lower();
  let f_name = fn_name("app_code_lesson_titles_capital_repair");
  let hint = text_combine_multiple([
    "these lesson titles open with a small letter where a capital belongs - repair every one of them with ",
    f_name,
  ]);
  let result = list_empty_is_assert_walked_generic(walked, offenders, hint);
  return result;
}

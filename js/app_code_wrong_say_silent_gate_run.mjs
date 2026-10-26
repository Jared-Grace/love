import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_wrong_say_silent_walked } from "./app_code_wrong_say_silent_walked.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_wrong_say_silent_baseline_path } from "./app_code_wrong_say_silent_baseline_path.mjs";
import { baseline_names_gate_walked_generic } from "./baseline_names_gate_walked_generic.mjs";
import { fn_name } from "./fn_name.mjs";
export async function app_code_wrong_say_silent_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: a code lesson that asks a learner to pick what code writes out says something when the pick is wrong.");
  ("Asked for by the human 2026-10-26: every wrong choice should have a helpful reminder. A wrong pick that only turns red tells the learner they are wrong and nothing about why, so the next pick is a guess.");
  ("Measured against the lessons already silent rather than against zero, so a new lesson must arrive speaking while the old ones are given their reminders one at a time. The list only shrinks: a lesson it does not hold fails, and one it holds that has started speaking fails too, so the record is cut down as each reminder lands rather than left to let the silence back in.");
  ("A lesson is silent only when no wrong press on any of its quizzes is answered, over two rounds of its questions - see the walk. The questions are drawn at random, so a lesson whose only reminder answers one rare pick can differ between runs; measured 2026-10-26 over sixty runs the set held at 61 every time, after the one such lesson then found was given a reminder that answers every pick. A lesson flickering here is the sign of that shape: give it a reminder for every pick rather than recording it.");
  let told = app_code_wrong_say_silent_walked();
  let walked = property_get(told, "walked");
  let offenders = property_get(told, "offenders");
  let path = app_code_wrong_say_silent_baseline_path();
  let r = await baseline_names_gate_walked_generic(
    walked,
    offenders,
    path,
    "these code lessons say nothing when a wrong output is picked - give their quizzes a wrong_say reminder, or, for a lesson that now speaks, shrink the record",
    fn_name("app_code_wrong_say_silent_baseline_write"),
  );
  return r;
}

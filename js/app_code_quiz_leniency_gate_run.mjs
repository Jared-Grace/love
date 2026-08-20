import { app_code_quiz_lenient_names } from "./app_code_quiz_lenient_names.mjs";
import { app_code_quiz_leniency_baseline_path } from "./app_code_quiz_leniency_baseline_path.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_size } from "./list_size.mjs";
export async function app_code_quiz_leniency_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: a quiz question cannot be answered by reading the right answer off the code.");
  (
    "A screen that marks a learner right for a reason that has nothing to do with what it teaches teaches nothing, and it does not look any different from one that works. The wrong answers are what tell them apart, and the wrong answers are made when the screen is drawn - nobody reading the lesson sees them."
  );
  (
    "That is why this is a gate rather than a habit. It was found three times by hand, twice in work that had just been called finished, and each finding cost an afternoon of reading; found the third time it was still the same fault. A quiz meaning to offer a tempting wrong answer and not offering it is the ordinary case, not the strange one, because the wrong answers are pulled from fresh runs of the batch rather than from the questions on the screen."
  );
  (
    "Measured against what the course already carried rather than against zero. The first lesson to give a value a name argues for itself that it should be passable - the only word on its screen is the answer, and it is worth that to let the one new fact meet a learner on its own. The list only shrinks: a way round it does not hold fails, and one it holds that is no longer passable fails too, because an entry left behind after a repair quietly lets the same fault back in."
  );
  let offenders = await app_code_quiz_lenient_names();
  let path = app_code_quiz_leniency_baseline_path();
  await baseline_names_gate_generic(
    offenders,
    path,
    "this lesson can be passed by reading the right answer off the code and could not before - give its quiz a wrong answer that is tempting for this question, the way the lessons around it do",
    fn_name("app_code_quiz_leniency_baseline_write"),
  );
  let r = {
    checked: list_size(offenders),
  };
  return r;
}

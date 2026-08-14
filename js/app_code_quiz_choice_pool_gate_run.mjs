import { app_code_quiz_choice_pool_unremapped } from "./app_code_quiz_choice_pool_unremapped.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export function app_code_quiz_choice_pool_gate_run() {
  "Gate: every multiple choice fills its wrong answers from the same pair it shows the learner. Throws so the dispatcher seam exits nonzero.";
  "The remainder-by-dividing lesson is the one that found this. Its last quiz shows a formula and is answered with a %, but the batch it draws its wrong answers from answers with a formula, so the check for a drawn line BEING the question compared a division against a formula and could never be true. Nothing was wrong on the screen, because that quiz seeds three tailored wrong answers by hand and the buttons hold four, so the drawing never ran. Raise the number of buttons, or let two of those three ever come out the same, and the quiz starts offering the learner the very formula it is asking them about.";
  "So this asks the structural question rather than the visible one. A quiz whose shown pair and drawn pair disagree is reported whether or not anything reaches the screen today, because what keeps it off the screen is an arithmetic coincidence somewhere else.";
  let rounds = 3;
  let unremapped = app_code_quiz_choice_pool_unremapped(rounds);
  let hint =
    "these quizzes show one pair and draw their wrong answers from another, so a button can be the question itself - give the quiz an info.qa_for that remaps a drawn line the way the quiz remaps its own";
  list_empty_is_assert_json(unremapped, {
    hint,
  });
  let r = {
    unremapped: 0,
  };
  return r;
}

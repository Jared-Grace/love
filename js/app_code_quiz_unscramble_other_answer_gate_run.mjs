import { app_code_quiz_unscramble_other_answer_rejected } from "./app_code_quiz_unscramble_other_answer_rejected.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export function app_code_quiz_unscramble_other_answer_gate_run() {
  "Gate: no unscramble in the course refuses an answer that is right by everything the learner was shown. Throws so the dispatcher seam exits nonzero.";
  "It is the third reading of the same pool. One asks whether the taught line is in it, one asks whether anything easier than the taught line is in it, and this one asks whether anything as good as the taught line has been left out of it.";
  "Twenty-three of five hundred and sixty-three lines the course can hand out failed this when it was first asked. Nothing was red: every accepted ordering meant what the question meant, and meaning was the only thing being checked - against a line the backwards question never puts on the screen.";
  "Read-only. It builds the same lines and the same pools the app builds, and looks at them.";
  "How many lines were built travels out with the verdict, because nothing rejected wrongly is also what this would say if the course handed out no lines at all.";
  let rounds = 3;
  let swept = app_code_quiz_unscramble_other_answer_rejected(rounds);
  let walked = property_get(swept, "walked");
  let rejected = property_get(swept, "found");
  let hint =
    "these lessons print a value, hand over a row of tiles, and then mark wrong an ordering of those tiles that comes out to that value in the shape the question set - the learner is being asked to guess the line the question was generated from. do not narrow the answer: look at what is keeping the dealing out of the pool";
  list_empty_is_assert_json(rejected, {
    hint,
  });
  let r = {
    walked,
    other_answer_rejected: 0,
  };
  return r;
}

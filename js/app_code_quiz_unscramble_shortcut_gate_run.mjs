import { property_get } from "./property_get.mjs";
import { app_code_quiz_unscramble_shortcut_accepted } from "./app_code_quiz_unscramble_shortcut_accepted.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export function app_code_quiz_unscramble_shortcut_gate_run() {
  "Gate: no unscramble in the course accepts an answer spelled with less in it than the question. Throws so the dispatcher seam exits nonzero.";
  "It stands beside the gate that asks whether the taught line is accepted, and it is the same pool read from the other end. That one keeps the quiz from being too hard to be fair; this one keeps it from being too easy to be worth passing.";
  "Twenty-seven of the seven hundred and sixty-one lines the course can hand out failed this when it was first asked, across five lessons - four whose subject is brackets, and the one that had just taught the semicolon and then accepted the line without it. None of it was visible: every accepted answer worked out to the right value, so nothing that read meaning had anything to object to.";
  "Read-only. It builds the same lines and the same pools the app builds, and looks at them.";
  "How many lines were built and looked at travels out with the verdict. Nothing accepted too easily is what this says on a good day, and it is also what it would say if the course handed out no lines at all, so the count is the only part of the answer telling the two apart.";
  let rounds = 3;
  let swept = app_code_quiz_unscramble_shortcut_accepted(rounds);
  let walked = property_get(swept, "walked");
  let accepted = property_get(swept, "found");
  let hint =
    "these lessons accept an answer that leaves out a token the question wrote, or brackets something the question did not bracket - a learner passes without doing the thing the lesson is about. widen nothing to fix it: look at what put the easier ordering in the pool";
  list_empty_is_assert_json(accepted, {
    hint,
  });
  let r = {
    walked,
    shortcut_accepted: 0,
  };
  return r;
}

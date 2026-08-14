import { app_code_quiz_unscramble_own_wording_rejected } from "./app_code_quiz_unscramble_own_wording_rejected.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export function app_code_quiz_unscramble_own_wording_gate_run() {
  "Gate: every unscramble in the course accepts the line it was asked in. Throws so the dispatcher seam exits nonzero.";
  "This one was paid for too, on the lesson whose whole subject is brackets. The taught line was (3 === 5) === (5 === 3), eleven tiles, and the four orderings it would accept were nine tiles each and none of them began with a bracket. A learner who copied the line they had just been shown was marked wrong on their first press. Nothing was red: the tiles were writable, the accepted orderings all said the right thing, and every gate agreed.";
  "So the missing question was never whether the pool is sound - it was whether the pool contains the answer the question was written to have. That is asked here, and it is worth asking on its own, because a pool can be right about everything in it and still be missing the one line the learner can see.";
  let rounds = 3;
  let rejected = app_code_quiz_unscramble_own_wording_rejected(rounds);
  let hint =
    "these lessons show the learner a line and then refuse it - copying the taught wording tile by tile is marked wrong, and every other ordering they accept is a longer way round";
  list_empty_is_assert_json(rejected, {
    hint,
  });
  let r = {
    rejected: 0,
  };
  return r;
}

import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { qa_gates_said_plain_baseline_path } from "./qa_gates_said_plain_baseline_path.mjs";
export async function qa_gates_said_plain_baseline_growth_assert(known) {
  "Refuse to record a gate the baseline did not already hold. A ratchet that can be rewritten in both directions is not a ratchet, and the rewrite would be reached for at exactly the moment the gate went red, which is the moment it was doing its job.";
  "The first seeding has no file to compare against and is allowed, and so is any rewrite that only drops names.";
  let path = qa_gates_said_plain_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "these gates can only complain in a sentence now and could not before either - throw the offenders as a record and put the advice under a hint, rather than recording one more sentence as known",
  );
}

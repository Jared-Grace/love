import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { qa_gates_countless_baseline_path } from "./qa_gates_countless_baseline_path.mjs";
export async function qa_gates_countless_baseline_growth_assert(known) {
  "Refuse to record a gate the baseline did not already hold. A ratchet that can be rewritten in both directions is not a ratchet, and the rewrite would be reached for at exactly the moment the gate went red, which is the moment it was doing its job.";
  "The first seeding has no file to compare against and is allowed, and so is any rewrite that only drops names.";
  arguments_assert(arguments, 1);
  let path = qa_gates_countless_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "these gates say nothing about how much they reached now and said nothing before either - carry the count of what was walked out with the verdict, rather than recording one more blind gate as known",
  );
}

import { baseline_known_write } from "./baseline_known_write.mjs";
import { qa_gates_said_plain } from "./qa_gates_said_plain.mjs";
import { qa_gates_said_plain_baseline_growth_assert } from "./qa_gates_said_plain_baseline_growth_assert.mjs";
import { qa_gates_said_plain_baseline_path } from "./qa_gates_said_plain_baseline_path.mjs";
export async function qa_gates_said_plain_baseline_write() {
  "Rewrite the plain-spoken-gate baseline from which gates can only complain in a sentence right now. For seeding the ratchet once, and for shrinking it after a gate has been taught to throw a record - never for blessing a new sentence, which is the one thing the gate exists to refuse.";
  let known = await qa_gates_said_plain();
  await qa_gates_said_plain_baseline_growth_assert(known);
  let path = qa_gates_said_plain_baseline_path();
  let r = await baseline_known_write(known, path);
  return r;
}

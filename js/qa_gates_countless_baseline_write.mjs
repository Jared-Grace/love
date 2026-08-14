import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
import { property_get } from "./property_get.mjs";
import { qa_gates_countless } from "./qa_gates_countless.mjs";
import { qa_gates_countless_baseline_growth_assert } from "./qa_gates_countless_baseline_growth_assert.mjs";
import { qa_gates_countless_baseline_path } from "./qa_gates_countless_baseline_path.mjs";
export async function qa_gates_countless_baseline_write() {
  "Rewrite the walk-count baseline from which gates say nothing about how much they reached right now. For seeding the ratchet once, and for shrinking it after a gate has been taught to carry its count - never for blessing a new blind gate, which is the one thing the gate exists to refuse.";
  arguments_assert(arguments, 0);
  let walked = await qa_gates_countless();
  let known = property_get(walked, "countless");
  await qa_gates_countless_baseline_growth_assert(known);
  let path = qa_gates_countless_baseline_path();
  let r = await baseline_known_write(known, path);
  return r;
}

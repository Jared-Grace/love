import { baseline_known_write } from "./baseline_known_write.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { functions_statements_after_return_baseline_path } from "./functions_statements_after_return_baseline_path.mjs";
import { functions_statements_after_return } from "./functions_statements_after_return.mjs";
export async function functions_statements_after_return_baseline_write() {
  "Rewrite the unreachable-statement baseline from what the repo carries right now. For seeding the ratchet once, and for shrinking it after a function has been cleared - never for blessing a new one, which is the one thing the gate exists to refuse.";
  let known = await functions_statements_after_return();
  let path = functions_statements_after_return_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "these functions carry statements below a return now and did not before - delete the dead lines, or move them above the return if they were meant to run",
  );
  let r = await baseline_known_write(known, path);
  return r;
}

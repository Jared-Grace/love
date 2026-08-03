import { functions_parameters_unread } from "./functions_parameters_unread.mjs";
import { functions_parameters_unread_baseline_growth_assert } from "./functions_parameters_unread_baseline_growth_assert.mjs";
import { functions_parameters_unread_baseline_path } from "./functions_parameters_unread_baseline_path.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function functions_parameters_unread_baseline_write() {
  "rewrite the unread-parameter baseline from what the repo carries right now. For seeding the ratchet once, and for shrinking it after parameters have been read or taken out - never for blessing a new one, which is the one thing the gate exists to refuse.";
  "Growing the file is refused rather than written. Seeding and shrinking are both honest, but a parameter nothing reads that was not there yesterday is the offense the gate exists to catch, and rewriting the baseline over it would turn the one red light into a green one with nothing left to show it happened.";
  let known = await functions_parameters_unread();
  await functions_parameters_unread_baseline_growth_assert(known);
  let path = functions_parameters_unread_baseline_path();
  let r = await baseline_known_write(known, path);
  return r;
}

import { functions_shadowing_baseline_growth_assert } from "./functions_shadowing_baseline_growth_assert.mjs";
import { shadowing_baseline_path } from "./shadowing_baseline_path.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { functions_shadowing } from "./functions_shadowing.mjs";
import { json_format_to } from "./json_format_to.mjs";
export async function functions_shadowing_baseline_write() {
  "rewrite data/shadowing_baseline.json from what the repo shadows right now. For seeding the ratchet once, and for shrinking it after names have been cleaned up — never for blessing a new offense, which is the one thing the gate exists to refuse.";
  "Growing the file is refused rather than written. Seeding and shrinking are both honest, but a name that shadows today and did not yesterday is the offense the gate exists to catch, and rewriting the baseline over it would turn the one red light into a green one with nothing left to show it happened.";
  let known = await functions_shadowing();
  await functions_shadowing_baseline_growth_assert(known);
  let path = shadowing_baseline_path();
  let r = await baseline_known_write(known, path);
  return r;
}

import { app_replace_abbreviations_unspelled } from "./app_replace_abbreviations_unspelled.mjs";
import { app_replace_abbreviations_unspelled_baseline_path } from "./app_replace_abbreviations_unspelled_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function app_replace_abbreviations_unspelled_baseline_write() {
  "Rewrite the record of mnemonics spelling something else from what the app carries right now. For seeding it once, and for shrinking it after one has been put right - never for blessing a new one, which is the one thing the gate exists to refuse.";
  let known = app_replace_abbreviations_unspelled();
  let path = app_replace_abbreviations_unspelled_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "an explanation's bold letters spell something other than the abbreviation, and did not before - bold the letters the short word is actually made of rather than recording it as known",
  );
  let r = await baseline_known_write(known, path);
  return r;
}

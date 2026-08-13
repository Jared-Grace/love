import { app_replace_abbreviations_mismatches } from "./app_replace_abbreviations_mismatches.mjs";
import { app_replace_abbreviations_baseline_path } from "./app_replace_abbreviations_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function app_replace_abbreviations_baseline_write() {
  "Rewrite the record of unanswered symbols from what the app carries right now. For seeding it once, and for shrinking it after a symbol has been explained or an explanation nobody could see has been taken away - never for blessing a new one, which is the one thing the gate exists to refuse.";
  let known = app_replace_abbreviations_mismatches();
  let path = app_replace_abbreviations_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "a set of rules and the explanations beside it stopped answering to each other, and did not before - explain the symbol, or take away the explanation no rule spells, rather than recording it as known",
  );
  let r = await baseline_known_write(known, path);
  return r;
}

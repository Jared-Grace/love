import { app_ceb_bible_gloss_affix_letters_apart_baseline_path } from "./app_ceb_bible_gloss_affix_letters_apart_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
export async function app_ceb_bible_gloss_affix_letters_apart_baseline_growth_assert(
  known,
) {
  "Refuse to record a quoted piece the record did not already hold.";
  "The record stands empty, and emptiness is the whole of what it is worth. Every one of these was repaired, so there is no reading left to bank and nothing to argue about - a single line written in here would be somebody blessing an invention at the one moment the gate was stopping them.";
  let path = app_ceb_bible_gloss_affix_letters_apart_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "recording these would bless an invented piece rather than repair it - quote the letters the dictionary gives for the word, or leave the piece unnamed",
  );
}

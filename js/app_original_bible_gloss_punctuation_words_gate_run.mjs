import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { app_original_bible_gloss_punctuation_entries_repair } from "./app_original_bible_gloss_punctuation_entries_repair.mjs";
import { gloss_punctuation_words_gate_generic } from "./gloss_punctuation_words_gate_generic.mjs";
export async function app_original_bible_gloss_punctuation_words_gate_run() {
  "Gate: no authored Hebrew or Greek gloss chapter explains a mark as though it were a word. Throws so the dispatcher seam exits nonzero.";
  "This store has never carried one, and the gate is here for the same reason the repair is: both stores are written the same way by the same hands, and a check only one of them is given is a check on whichever store happened to be looked at first.";
  let fn = app_original_bible_gloss_generate;
  let repair_fn = app_original_bible_gloss_punctuation_entries_repair;
  let r = await gloss_punctuation_words_gate_generic(
    fn,
    "original bible",
    repair_fn,
  );
  return r;
}

import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { app_ceb_bible_gloss_punctuation_entries_repair } from "./app_ceb_bible_gloss_punctuation_entries_repair.mjs";
import { gloss_punctuation_words_gate_generic } from "./gloss_punctuation_words_gate_generic.mjs";
export async function app_ceb_bible_gloss_punctuation_words_gate_run() {
  "Gate: no authored Cebuano gloss chapter explains a mark as though it were a word. Throws so the dispatcher seam exits nonzero.";
  "This is the store the fault was found in, and it is clean now, so the gate holds it there.";
  let fn = app_ceb_bible_gloss_generate;
  let repair_fn = app_ceb_bible_gloss_punctuation_entries_repair;
  let r = await gloss_punctuation_words_gate_generic(
    fn,
    "ceb bible",
    repair_fn,
  );
  return r;
}

import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { app_en_learn_bible_gloss_urdu_punctuation_entries_repair } from "./app_en_learn_bible_gloss_urdu_punctuation_entries_repair.mjs";
import { gloss_punctuation_words_gate_generic } from "./gloss_punctuation_words_gate_generic.mjs";
export async function app_en_learn_bible_gloss_urdu_punctuation_words_gate_run() {
  "Gate: no authored chapter of English words explained in Urdu explains a mark as though it were a word. Throws so the dispatcher seam exits nonzero.";
  "The reader of this store is being taught the English wording in a language of their own, so an explanation painted one word along from the word it is about is read as the meaning of the wrong English word - which is the thing they came here to learn and have no other way of checking.";
  let fn = app_en_learn_bible_gloss_urdu_generate;
  let repair_fn = app_en_learn_bible_gloss_urdu_punctuation_entries_repair;
  let r = await gloss_punctuation_words_gate_generic(
    fn,
    "urdu bible",
    repair_fn,
  );
  return r;
}

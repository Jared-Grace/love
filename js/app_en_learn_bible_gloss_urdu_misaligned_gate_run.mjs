import { gloss_passage_words_text_first } from "./gloss_passage_words_text_first.mjs";
import { gloss_words_misaligned_gate_generic } from "./gloss_words_misaligned_gate_generic.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
export async function app_en_learn_bible_gloss_urdu_misaligned_gate_run() {
  "Gate: no authored chapter of English words explained in Urdu explains a word the passage does not carry, in the order the page paints them. Throws so the dispatcher seam exits nonzero.";
  "This store explains the English wording to a reader whose own language is Urdu, and English is the first of the two bibles the passage carries, so the words checked against are the first text's.";
  let fn = app_en_learn_bible_gloss_urdu_generate;
  let words_read = gloss_passage_words_text_first;
  let r = await gloss_words_misaligned_gate_generic(
    fn,
    "urdu bible",
    words_read,
  );
  return r;
}

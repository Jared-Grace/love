import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_passage_words_text_first } from "./gloss_passage_words_text_first.mjs";
import { gloss_words_misaligned_gate_generic } from "./gloss_words_misaligned_gate_generic.mjs";
export async function app_ceb_bible_gloss_misaligned_gate_run() {
  "Gate: no authored Cebuano gloss chapter explains words the passage does not carry, in the order the page paints them. Throws so the dispatcher seam exits nonzero.";
  "This store glosses the Cebuano wording rather than the original language, so the words checked against are the first bible's, which is the Cebuano one the passage was cut by.";
  let fn = app_ceb_bible_gloss_generate;
  let words_read = gloss_passage_words_text_first;
  let r = await gloss_words_misaligned_gate_generic(
    fn,
    "ceb bible",
    words_read,
  );
  return r;
}

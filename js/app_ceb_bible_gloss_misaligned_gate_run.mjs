import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_passage_words_text_first } from "./gloss_passage_words_text_first.mjs";
import { gloss_words_misaligned_gate_generic } from "./gloss_words_misaligned_gate_generic.mjs";
export async function app_ceb_bible_gloss_misaligned_gate_run() {
  "Gate: no authored Cebuano gloss chapter explains words the passage does not carry, in the order the page paints them. Throws so the dispatcher seam exits nonzero.";
  "This store glosses the Cebuano wording rather than the original language, so the words checked against are the first bible's, which is the Cebuano one the passage was cut by.";
  "What to do about a difference here is authoring and not a command, and the complaint says so. Cebuano is written in a Latin alphabet, so the one cause that can be mended by machine - the same word spelled two ways in characters that look identical - cannot arise, and what is left is a word nobody explained or an explanation left over after the words ran out.";
  let fn = app_ceb_bible_gloss_generate;
  let words_read = gloss_passage_words_text_first;
  let mend =
    "the Cebuano words are written in a Latin alphabet, so one word spelled two ways cannot be the cause here - either a word was left with no explanation under it or an explanation was left over after the words ran out, and the chapter's explanations have to be authored to cover the passage's words in the order it writes them";
  let r = await gloss_words_misaligned_gate_generic(
    fn,
    "ceb_bible",
    words_read,
    mend,
  );
  return r;
}

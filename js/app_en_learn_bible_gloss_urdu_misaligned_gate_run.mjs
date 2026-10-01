import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { gloss_passage_words_text_first } from "./gloss_passage_words_text_first.mjs";
import { gloss_words_misaligned_gate_generic } from "./gloss_words_misaligned_gate_generic.mjs";
export async function app_en_learn_bible_gloss_urdu_misaligned_gate_run() {
  "Gate: no authored chapter of English words explained in Urdu explains a word the passage does not carry, in the order the page paints them. Throws so the dispatcher seam exits nonzero.";
  "This store explains the English wording to a reader whose own language is Urdu, and English is the first of the two bibles the passage carries, so the words checked against are the first text's.";
  "What to do about a difference here is authoring and not a command, and the complaint says so. The words being explained are the English ones, written in a Latin alphabet, so the one cause that can be mended by machine - the same word spelled two ways in characters that look identical - cannot arise. The Urdu is the explaining and never the explained, so its own alphabet is not what is compared.";
  let fn = app_en_learn_bible_gloss_urdu_generate;
  let words_read = gloss_passage_words_text_first;
  let mend =
    "the words being explained are the English ones, written in a Latin alphabet, so one word spelled two ways cannot be the cause here - either a word was left with no explanation under it or an explanation was left over after the words ran out, and the chapter's explanations have to be authored to cover the passage's words in the order it writes them";
  let r = await gloss_words_misaligned_gate_generic(
    fn,
    "en_learn_bible",
    words_read,
    mend,
  );
  return r;
}

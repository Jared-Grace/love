import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { gloss_passage_words_originals } from "./gloss_passage_words_originals.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { gloss_words_misaligned_gate_generic } from "./gloss_words_misaligned_gate_generic.mjs";
export async function app_original_bible_gloss_misaligned_gate_run() {
  "Gate: no authored original-language gloss chapter explains words the passage does not carry, in the order the page paints them. Throws so the dispatcher seam exits nonzero.";
  "This store glosses the original language itself, so the words checked against are the passage's original-language wording rather than any translation beside it.";
  "★ THE COMMAND THAT MENDS THIS IS NAMED IN THE COMPLAINT, BECAUSE THE DIFFERENCE THIS HANDS BACK CAN BE THE SAME WORD TWICE AS FAR AS A READER CAN SEE. Hebrew and Greek write an accented letter in more than one spelling of the same characters, so a word typed out again by an author looks right on the screen and still fails the comparison - which is the ordinary cause of a difference in this store and the one a reader has no way to recognise. Measured 2026-10-01: the complaint showed one Hebrew word as written and as explained, identical to look at, and the repair command already existed.";
  "It finds its own work, so what a reader types is one thing rather than a list of chapter codes copied out of the complaint, and running it over a store that is already right mends nothing.";
  let fn = app_original_bible_gloss_generate;
  let words_read = gloss_passage_words_originals;
  let mend = text_combine_multiple([
    "two words that look the same are the ordinary cause here, because an accented Hebrew or Greek letter has more than one spelling of the same characters - put the passage's own letters back across every chapter at once with ",
    fn_name("app_original_bible_gloss_words_unicode_repair_all"),
    ", which finds its own work, and read whatever is left after that",
  ]);
  let r = await gloss_words_misaligned_gate_generic(
    fn,
    "original_bible",
    words_read,
    mend,
  );
  return r;
}

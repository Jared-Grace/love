import { app_original_bible_gloss_lexicons_named_chapters } from "./app_original_bible_gloss_lexicons_named_chapters.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { gloss_chapters_offenders_assert } from "./gloss_chapters_offenders_assert.mjs";
export async function app_original_bible_gloss_lexicons_named_gate_run() {
  "Gate: no authored chapter of the original-language gloss says the name of a lexicon to its reader. Throws so the dispatcher seam exits nonzero.";
  "The corpus was found written in two voices - two chapters naming Strong's to the reader hundreds of times, four naming it not once - and the human settled it: the meaning is given and the source is not. Every chapter was then read and brought to zero. Nothing but this stops the next chapter authored bringing the other voice back, and a voice that splits again costs a full re-reading of everything written in between.";
  "It starts at nothing and there is no baseline beside it, because a list to add offenders to would turn a red light into a place to write things down.";
  "★ THE COMMAND THAT MENDS A CHAPTER IS NAMED IN THE COMPLAINT, BECAUSE THE CHAPTER CODE THIS HANDS BACK DOES NOT SAY WHERE THE WORDING IS KEPT AND NOTHING NEARBY DOES EITHER. The text is not in this repo at all: it is in a store under the human's own folder, addressed by a chain of six functions from a chapter code, and a reader stopped by this has no reason to know any of that. Measured 2026-10-01: finding the file by hand cost most of the repair, and the repair itself was one call. The command takes the chapter code and finds the file itself, so naming it spends the whole of that cost once here instead of once per reader.";
  "Naming a cure inside a complaint is safe only because of where it is put. A red gate is read back afterwards for the function names in it, and an app shipping a named function is held out of its deployment - so the sentence goes under the hint, which is dropped before those names are read. The place that settles this is the refusing one below, and it says so at length.";
  let walked = await app_original_bible_gloss_lexicons_named_chapters();
  let fault = text_combine_multiple([
    "say the name of a lexicon to the reader - swap the wording in each with ",
    fn_name("app_original_bible_gloss_chapter_explains_text_replace"),
    ", which takes the chapter code and finds the file itself",
  ]);
  let r = gloss_chapters_offenders_assert(walked, "original_bible", fault);
  return r;
}

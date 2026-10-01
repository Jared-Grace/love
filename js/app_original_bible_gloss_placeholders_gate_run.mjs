import { app_original_bible_gloss_placeholders_chapters } from "./app_original_bible_gloss_placeholders_chapters.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { gloss_chapters_offenders_assert } from "./gloss_chapters_offenders_assert.mjs";
export async function app_original_bible_gloss_placeholders_gate_run() {
  "Gate: no word of any authored chapter of the original-language gloss shows the reader a marker where its meaning belongs. Throws so the dispatcher seam exits nonzero.";
  "The row a reader meets is the word, then short English, then the sentence explaining it. Four of the six chapters authored carried a dash or a run of dots or arrows in the middle of 347 of those rows - the interlinear's own marks, copied through, saying only that the English translation happened to show no word at that point. That is a fact about a translation the reader cannot see, and it is worthless to somebody who came for the meaning of the Greek. Two chapters had already written the meaning instead, so the house answer was settled before the question was asked.";
  "It starts at nothing and there is no baseline beside it, because a list to add offenders to would turn a red light into a place to write things down. Every chapter was brought to zero first, so it was green on the day it landed.";
  ("★ THE THREE COMMANDS THAT MEND A CHAPTER ARE NAMED IN THE COMPLAINT, BECAUSE THE CHAPTER CODE THIS HANDS BACK DOES NOT SAY WHERE THE WORDING IS KEPT AND NOTHING NEARBY DOES EITHER. The text is not in this repo at all: it is in a store under the human's own folder, addressed by a chain of six functions from a chapter code, and a reader stopped by this has no reason to know any of that. The sister gate ",
    fn_name("app_original_bible_gloss_lexicons_named_gate_run"),
    " is where the measurement and the reason a cure may be named inside a complaint at all are written down.");
  ("It takes three rather than one because this fault cannot be mended by swapping one wording for another. A marker is standing where a meaning was never written, so the meaning has to be authored: the first hands back the worksheet for one chapter - every marked word, where it stands, and the prose already beside it - and the second writes the short English back a passage at a time. The third is owed because an author who left a marker often pointed at it in the sentence beside the word, so mending the short English alone leaves a sentence pointing at a mark that is no longer on the page; it finds its own work and may be run once at the end rather than per chapter.");
  let walked = await app_original_bible_gloss_placeholders_chapters();
  let fault = text_combine_multiple([
    "show a marker where a word's meaning belongs - ask ",
    fn_name("app_original_bible_gloss_placeholders_chapter_entries"),
    " for a chapter's worksheet, write the meanings back with ",
    fn_name("app_original_bible_gloss_glosses_write"),
    ", then clear the sentences left pointing at the gone markers with ",
    fn_name("app_original_bible_gloss_marker_clauses_repair"),
  ]);
  let r = gloss_chapters_offenders_assert(walked, "original_bible", fault);
  return r;
}

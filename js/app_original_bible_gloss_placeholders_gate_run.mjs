import { app_original_bible_gloss_placeholders_chapters } from "./app_original_bible_gloss_placeholders_chapters.mjs";
import { gloss_chapters_offenders_assert } from "./gloss_chapters_offenders_assert.mjs";
export async function app_original_bible_gloss_placeholders_gate_run() {
  "Gate: no word of any authored chapter of the original-language gloss shows the reader a marker where its meaning belongs. Throws so the dispatcher seam exits nonzero.";
  "The row a reader meets is the word, then short English, then the sentence explaining it. Four of the six chapters authored carried a dash or a run of dots or arrows in the middle of 347 of those rows - the interlinear's own marks, copied through, saying only that the English translation happened to show no word at that point. That is a fact about a translation the reader cannot see, and it is worthless to somebody who came for the meaning of the Greek. Two chapters had already written the meaning instead, so the house answer was settled before the question was asked.";
  "It starts at nothing and there is no baseline beside it, because a list to add offenders to would turn a red light into a place to write things down. Every chapter was brought to zero first, so it was green on the day it landed.";
  let walked = await app_original_bible_gloss_placeholders_chapters();
  let r = gloss_chapters_offenders_assert(
    walked,
    "original bible gloss",
    "show a marker where a word's meaning belongs",
  );
  return r;
}

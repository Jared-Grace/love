import { app_original_bible_gloss_lexicons_named_chapters } from "./app_original_bible_gloss_lexicons_named_chapters.mjs";
import { gloss_chapters_offenders_assert } from "./gloss_chapters_offenders_assert.mjs";
export async function app_original_bible_gloss_lexicons_named_gate_run() {
  "Gate: no authored chapter of the original-language gloss says the name of a lexicon to its reader. Throws so the dispatcher seam exits nonzero.";
  "The corpus was found written in two voices - two chapters naming Strong's to the reader hundreds of times, four naming it not once - and the human settled it: the meaning is given and the source is not. Every chapter was then read and brought to zero. Nothing but this stops the next chapter authored bringing the other voice back, and a voice that splits again costs a full re-reading of everything written in between.";
  "It starts at nothing and there is no baseline beside it, because a list to add offenders to would turn a red light into a place to write things down.";
  let walked = await app_original_bible_gloss_lexicons_named_chapters();
  let r = gloss_chapters_offenders_assert(
    walked,
    "original bible gloss",
    "say the name of a lexicon to the reader",
  );
  return r;
}

import { app_ceb_bible_gloss_gate_told_chapters } from "./app_ceb_bible_gloss_gate_told_chapters.mjs";
import { app_ceb_bible_gloss_stored_not_is } from "./app_ceb_bible_gloss_stored_not_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_passages_respell_refused_names } from "./app_ceb_bible_gloss_passages_respell_refused_names.mjs";
import { app_ceb_bible_gloss_passages_respell_refused_baseline_path } from "./app_ceb_bible_gloss_passages_respell_refused_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
export async function app_ceb_bible_gloss_passages_respell_refused_gate_run() {
  "Gate: no Cebuano gloss passage authored from here on may explain a different number of words than the passage holds, which is the shape that makes the respell walk past it. Throws so the dispatcher seam exits nonzero.";
  "The record starts full and may only shrink. Thirteen passages were already in that state when the store was first read for this, and each of them is a reading job rather than a sweep - somebody has to find which word went unexplained. This holds the tail where it is while that waits.";
  "★ THIS IS THE ONE FAULT IN THE STORE THAT NOTHING ELSE CAN SEE. The respell answers with the spellings it changed, so a passage it declines and a passage that needed nothing look the same from outside; a chapter authored today with a word left unexplained joins the untouched set with no reading going red. Every other gloss ratchet watches something that is written down somewhere and can be read back. This one watches an absence.";
  "A store that is not on the disk is passed over and said so, rather than counted as clean. The store lives on a drive that is not always mounted, and every Claude in the repo runs this gate - a sweep that read nothing and called it nought would turn one unmounted drive into a record wiped for everybody.";
  "How many chapters were walked travels out beside the verdict, because finding none and reaching none are the same word otherwise.";
  arguments_assert(arguments, 0);
  let unread = await app_ceb_bible_gloss_stored_not_is();
  if (unread) {
    let skipped = {
      skipped: 1,
    };
    return skipped;
  }
  let offenders = await app_ceb_bible_gloss_passages_respell_refused_names();
  let path = app_ceb_bible_gloss_passages_respell_refused_baseline_path();
  let name_write = fn_name(
    "app_ceb_bible_gloss_passages_respell_refused_baseline_write",
  );
  let told = await baseline_names_gate_generic(
    offenders,
    path,
    "the words these passages explain do not come to the same number as the words they hold, so the respell walks past them and says nothing - explain the word that was missed, or take away the explanation of a word the passage does not carry",
    name_write,
  );
  let r = await app_ceb_bible_gloss_gate_told_chapters(told);
  return r;
}

import { app_ceb_bible_gloss_stored_is } from "./app_ceb_bible_gloss_stored_is.mjs";
import { not } from "./not.mjs";
import { app_ceb_bible_gloss_affix_kinds_wrong_names } from "./app_ceb_bible_gloss_affix_kinds_wrong_names.mjs";
import { app_ceb_bible_gloss_affix_kinds_wrong_baseline_path } from "./app_ceb_bible_gloss_affix_kinds_wrong_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { gloss_gate_told_chapters } from "./gloss_gate_told_chapters.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
export async function app_ceb_bible_gloss_affix_kinds_wrong_gate_run() {
  "Gate: no Cebuano explanation authored from here on may call a piece of its word by a name the dictionary gives the word no piece of. Throws so the dispatcher seam exits nonzero.";
  "The record starts full and may only shrink. Twelve hundred of these were found across the Psalms, the Song and the Proverbs - an authoring era that named a prefix wherever the dictionary cut an infix - and most were repaired one authored sentence at a time. The tail that is left has no shortcut in it, so this holds what was bought while it waits.";
  "It is the name of the piece and not its letters that is watched here, which is the opposite half from the sibling gate. A word can quote the right letters under the wrong name and a word can quote invented letters under a name the dictionary does give; neither check sees what the other does, and the earlier one passed six hundred and eleven of these.";
  "A store that is not on the disk is passed over and said so, rather than counted as clean. The store lives on a drive that is not always mounted, and every Claude in the repo runs this gate - a sweep that read nothing and called it nought would turn one unmounted drive into a record wiped for everybody.";
  "How many chapters were walked travels out beside the verdict, because finding none and reaching none are the same word otherwise.";
  let stored = await app_ceb_bible_gloss_stored_is();
  let unread = not(stored);
  if (unread) {
    let skipped = {
      skipped: 1,
    };
    return skipped;
  }
  let offenders = await app_ceb_bible_gloss_affix_kinds_wrong_names();
  let path = app_ceb_bible_gloss_affix_kinds_wrong_baseline_path();
  let name_write = fn_name(
    "app_ceb_bible_gloss_affix_kinds_wrong_baseline_write",
  );
  let told = await baseline_names_gate_generic(
    offenders,
    path,
    "these explanations call a piece of their word by a name the dictionary gives the word no piece of - name only the kinds of piece the dictionary gives for that word, or name none",
    name_write,
  );
  let r = await gloss_gate_told_chapters(app_ceb_bible_gloss_generate, told);
  return r;
}

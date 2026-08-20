import { gloss_gate_told_chapters } from "./gloss_gate_told_chapters.mjs";
import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
import { app_ceb_bible_gloss_affix_letters_apart } from "./app_ceb_bible_gloss_affix_letters_apart.mjs";
import { app_ceb_bible_gloss_affix_letters_apart_baseline_path } from "./app_ceb_bible_gloss_affix_letters_apart_baseline_path.mjs";
import { app_ceb_bible_gloss_stored_is } from "./app_ceb_bible_gloss_stored_is.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { fn_name } from "./fn_name.mjs";
import { not } from "./not.mjs";
export async function app_ceb_bible_gloss_affix_letters_apart_gate_run() {
  "Gate: no Cebuano explanation may quote letters for a piece of its word that stand nowhere in the dictionary's cut of it. Throws so the dispatcher seam exits nonzero.";
  "The record stands empty and that is the point. Six hundred and fifty of these explanations disagree with the dictionary about where a word ends and its piece begins, and every one of those tells a learner something true; the handful that quoted letters belonging to neither the word nor its cut were repaired, and no reading is left that would justify another.";
  "It is the letters and not the name of the piece that is watched here. A check on the name alone passes any word the dictionary builds with a piece of that kind, however wrong the letters quoted for it - six hundred and eleven faults were invisible behind exactly that.";
  "A store that is not on the disk is passed over and said so, rather than counted as clean. The store lives on a drive that is not always mounted, and every Claude in the repo runs this gate - a sweep that read nothing and called it nought would turn one unmounted drive into a record wiped for everybody.";
  "How many chapters were walked travels out beside the verdict, because finding none and reaching none are the same word otherwise. The chapters are asked for from the same place the sweep gets them, so the two fall together: on the day the store's own listing stops answering, the number goes to nought where a reader can see it rather than the verdict going quietly green.";
  let stored = await app_ceb_bible_gloss_stored_is();
  let unread = not(stored);
  if (unread) {
    let skipped = {
      skipped: 1,
    };
    return skipped;
  }
  let offenders = await app_ceb_bible_gloss_affix_letters_apart();
  let path = app_ceb_bible_gloss_affix_letters_apart_baseline_path();
  let name_write = fn_name(
    "app_ceb_bible_gloss_affix_letters_apart_baseline_write",
  );
  let told = await baseline_names_gate_generic(
    offenders,
    path,
    "these explanations quote letters for a piece of their word that stand nowhere in the dictionary's cut of it, so the piece was got from nowhere - quote the letters the dictionary gives, or leave the piece unnamed",
    name_write,
  );
  let r = await gloss_gate_told_chapters(app_ceb_bible_gloss_generate, told);
  return r;
}

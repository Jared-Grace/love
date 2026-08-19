import { app_ceb_bible_gloss_roots_shallower } from "./app_ceb_bible_gloss_roots_shallower.mjs";
import { app_ceb_bible_gloss_roots_shallower_baseline_path } from "./app_ceb_bible_gloss_roots_shallower_baseline_path.mjs";
import { app_ceb_bible_gloss_stored_is } from "./app_ceb_bible_gloss_stored_is.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { fn_name } from "./fn_name.mjs";
import { not } from "./not.mjs";
export async function app_ceb_bible_gloss_roots_shallower_gate_run() {
  "Gate: no Cebuano explanation may newly hand the reader a word built out of the root as though it were the root. Throws so the dispatcher seam exits nonzero.";
  "This is the single thing the whole gloss exists to prevent - a learner told that lilisang is where makalilisang comes from has been taught a word nobody speaks. Thirty of them were taken out by hand, and the pass that writes these explanations would put them straight back if it were run again over a chapter.";
  "Measured against the record rather than against zero, because a hundred and fifty of these are the dictionary being the odd one out - it strips naa off anaa, an etymological stem nobody says, and the explanation named the actual word. Those were read one by one and left standing on purpose. What the record holds is what has been read; a pair it does not hold is one nobody has looked at.";
  "A store that is not on the disk is passed over and said so, rather than counted as clean. The store lives on a drive that is not always mounted, and every Claude in the repo runs this gate - a sweep that read nothing and called it nought would turn one unmounted drive into a record wiped for everybody.";
  let stored = await app_ceb_bible_gloss_stored_is();
  let unread = not(stored);
  if (unread) {
    let skipped = {
      skipped: 1,
    };
    return skipped;
  }
  let offenders = await app_ceb_bible_gloss_roots_shallower();
  let path = app_ceb_bible_gloss_roots_shallower_baseline_path();
  let name_write = fn_name(
    "app_ceb_bible_gloss_roots_shallower_baseline_write",
  );
  let r = await baseline_names_gate_generic(
    offenders,
    path,
    "these explanations name a word built out of the root as though it were the root, which hands a learner a word nobody speaks - write the root the dictionary gives, or say plainly that the word named is a further layer built on it",
    name_write,
  );
  return r;
}

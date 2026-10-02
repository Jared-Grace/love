import { app_ceb_bible_gloss_stored_not_is } from "./app_ceb_bible_gloss_stored_not_is.mjs";
import { app_ceb_bible_gloss_roots_shallower } from "./app_ceb_bible_gloss_roots_shallower.mjs";
import { app_ceb_bible_gloss_roots_shallower_baseline_path } from "./app_ceb_bible_gloss_roots_shallower_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { app_ceb_bible_gloss_gate_told_chapters } from "./app_ceb_bible_gloss_gate_told_chapters.mjs";
export async function app_ceb_bible_gloss_roots_shallower_gate_run() {
  "Gate: no Cebuano explanation may newly hand the reader a word built out of the root as though it were the root. Throws so the dispatcher seam exits nonzero.";
  "This is the single thing the whole gloss exists to prevent - a learner told that lilisang is where makalilisang comes from has been taught a word nobody speaks. Thirty of them were taken out by hand, and the pass that writes these explanations would put them straight back if it were run again over a chapter.";
  "It was measured against the record rather than against zero while the record held names, because most of them were the dictionary being the odd one out - it strips naa off anaa, an etymological stem nobody says, and the explanation named the actual word. Repairing those would have made the prose worse, so the record held them where they were.";
  ("★ ALL TWENTY NINE LEFT THE STORE WITHOUT ANY OF THEM BEING READ, AND THE RECORD IS EMPTY NOW AGAINST ZERO. On the second of October the sweep found none of them. Nine hundred and sixty seven of the store's nine hundred and seventy nine chapters had been rewritten in one minute that morning, and the reading jobs this record was holding open were overwritten rather than done. The record was emptied on purpose with ",
    fn_name("baseline_known_clear"),
    " naming the file, which makes the gate stricter and not looser: the next shallow root is refused where before twenty nine of them were allowed through by name.");
  ("Two of them were followed to the bottom, because the same disappearance can mean a mend or a blinding and they do not look alike from a count. pakita for kita went by the word moving: the store holds no entry for pakita at all now, while the sentence saying its root is pakita stands forty six times under gipakita and pagpakita, whose root the dictionary really does give as pakita - the same words, now true, because the word above them was respelled to what the verse writes. anaa for naa went the other way: the explanation stopped naming a root at all, and the weaker test that then takes over asks only whether the root stands somewhere in the wording - naa sits inside anaa, so it passes without anything having been decided. The first is a mend. The second is a sentence saying less than it did, which is not the fault this gate names and not an answer to it either.");
  ("So what a reader should expect of this gate from here on is narrower than what it was seeded for. It still refuses a thirtieth arriving, which is what it was built for and the only thing the pass that writes these explanations would do. It can no longer be the list somebody sits down with, because that list is gone.");
  ("A store that is not on the disk is passed over and said so, rather than counted as clean. The store lives on a drive that is not always mounted, and every Claude in the repo runs this gate - a sweep that read nothing and called it nought would turn one unmounted drive into a record wiped for everybody.");
  ("How many chapters were walked travels out beside the verdict, because finding none and reaching none are the same word otherwise. The chapters are asked for from the same place the sweep gets them, so the two fall together: on the day the store's own listing stops answering, the number goes to nought where a reader can see it rather than the verdict going quietly green.");
  let unread = await app_ceb_bible_gloss_stored_not_is();
  if (unread) {
    let skipped = {
      skipped: 1,
    };
    return skipped;
  }
  let offenders = await app_ceb_bible_gloss_roots_shallower();
  let path = app_ceb_bible_gloss_roots_shallower_baseline_path();
  let told = await baseline_names_gate_generic(
    offenders,
    path,
    "these explanations name a word built out of the root as though it were the root, which hands a learner a word nobody speaks - write the root the dictionary gives, or say plainly that the word named is a further layer built on it",
    fn_name("app_ceb_bible_gloss_roots_shallower_baseline_write"),
  );
  let r = await app_ceb_bible_gloss_gate_told_chapters(told);
  return r;
}

import { app_ceb_bible_gloss_stored_not_is } from "./app_ceb_bible_gloss_stored_not_is.mjs";
import { app_ceb_bible_gloss_roots_claimed_stopped_short_named } from "./app_ceb_bible_gloss_roots_claimed_stopped_short_named.mjs";
import { app_ceb_bible_gloss_roots_claimed_stopped_short_baseline_path } from "./app_ceb_bible_gloss_roots_claimed_stopped_short_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { app_ceb_bible_gloss_gate_told_chapters } from "./app_ceb_bible_gloss_gate_told_chapters.mjs";
export async function app_ceb_bible_gloss_roots_claimed_stopped_short_gate_run() {
  "Gate: no Cebuano explanation may newly cut a root short of a root the dictionary knows at the very same spot in the very same word. Throws so the dispatcher seam exits nonzero.";
  "The sibling ratchet catches the explanation naming a word built out of the root as though it were the root, and it cannot see this one. Both come back from a relation reading as deeper, and deeper is usually right: gugma under higugma tells a reader more than the dictionary does. Naming kasing under kasingkasing is the same answer and the opposite thing, because kasing is not a shorter root, it is the word with half of it taken off.";
  "What tells the two apart with nobody judging Cebuano is that the dictionary has vouched for gugma and has never vouched for kasing, while it has vouched for the whole of kasingkasing standing where the letters were cut. Every one of these is two answers the dictionary gave, compared - nothing here asks anything about morphology.";
  "Measured against the record rather than against zero, and not because the ones standing today are in doubt. They have been read and they are the fault this was built to find - a reduplication cut in half, a word docked of its last letters, a claim accounting for no part of the word it was made about. What has not happened is the repair, and the repair is a decision about how three books get authored rather than a line somebody changes. The ratchet is worth having before that decision rather than after it: it costs nothing to seed, and what it stops is a thirty-second arriving unnoticed while the thirty-one wait.";
  "★ THE REPAIR HAPPENED, AND THIRTY OF THE THIRTY ONE ARE GONE. On the second of October the sweep found one, kasing under kasingkasing, which is the one the whole gate was written around. The record was shrunk to that one. What did the repair was not the decision this was waiting for: nine hundred and sixty seven of the store's nine hundred and seventy nine chapters were rewritten in one minute that morning by a pass, and the explanations came out the other side naming the whole word where they used to dock it. Hunahunaa comes from hunahuna now, not from huna; Ulipong comes from ulipon, not from ulip; and Tarong simply means straight and right, claiming no root at all, which is honest where taro was wrong.";
  "That the thirty were mended and not merely unread was settled before the record was touched, because the two look alike from a count. Four things said mended. The letters of every short root are no longer quoted anywhere in the store at all - not taro, not tan, not halang, not sud, not ulip - so there is no claim left for a reader to miss. The explanations that replaced them were read and name the whole word. The sweep still reaches nine hundred and eighty chapters and one thousand four hundred and fourteen distinct roots, and still finds this exact fault once, so it has not gone blind. And neither half of the reading had been touched since the fifteenth of September, three weeks before the store moved.";
  "★ THE GATE BESIDE THIS ONE WENT THE OTHER WAY ON THE SAME MORNING, WHICH IS WHY THE CHECK ABOVE IS WORTH THE TIME. The record of words explained two ways went wholly stale in the same pass and must not be shrunk, because its reader only sees the one wording root is and the pass writes comes from instead - the words are still explained two ways on the disk and the reading can no longer see it. Same pass, same hour, opposite verdicts. A stale name is never news on its own.";
  "A store that is not on the disk is passed over and said so, rather than counted as clean. The store lives on a drive that is not always mounted, and every Claude in the repo runs this gate - a sweep that read nothing and called it nought would turn one unmounted drive into a record wiped for everybody.";
  "How many chapters were walked travels out beside the verdict, because finding none and reaching none are the same word otherwise.";
  let unread = await app_ceb_bible_gloss_stored_not_is();
  if (unread) {
    let skipped = {
      skipped: 1,
    };
    return skipped;
  }
  let offenders = await app_ceb_bible_gloss_roots_claimed_stopped_short_named();
  let path = app_ceb_bible_gloss_roots_claimed_stopped_short_baseline_path();
  let told = await baseline_names_gate_generic(
    offenders,
    path,
    "these explanations hand a learner half of a word as its root, where the dictionary vouches for the whole run of letters starting at the same place - write the root out whole, or say plainly what the letters named are a part of",
    fn_name("app_ceb_bible_gloss_roots_claimed_stopped_short_baseline_write"),
  );
  let r = await app_ceb_bible_gloss_gate_told_chapters(told);
  return r;
}

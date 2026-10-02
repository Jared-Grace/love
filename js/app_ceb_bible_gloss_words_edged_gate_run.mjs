import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_stored_not_is } from "./app_ceb_bible_gloss_stored_not_is.mjs";
import { app_ceb_bible_gloss_words_edged_names } from "./app_ceb_bible_gloss_words_edged_names.mjs";
import { app_ceb_bible_gloss_words_edged_baseline_path } from "./app_ceb_bible_gloss_words_edged_baseline_path.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { app_ceb_bible_gloss_gate_told_chapters } from "./app_ceb_bible_gloss_gate_told_chapters.mjs";
export async function app_ceb_bible_gloss_words_edged_gate_run() {
  "Gate: no Cebuano gloss chapter authored from here on may explain a word that still carries a mark from the sentence around it. Throws so the dispatcher seam exits nonzero.";
  "★ A WORD NAMED HERE IS INVISIBLE TO EVERY OTHER CHECK IN THE REPO, WHICH IS WHY THIS ONE IS WORTH KEEPING. The root checks, the affix checks and the dictionary readings all ask under the spelling the author typed, so a word wearing a quotation mark or a comma is asked for under a spelling no dictionary holds, comes back unknown, and is passed over in silence by all of them. Nothing goes red anywhere; the word is simply never looked at again.";
  "That makes this the opposite of the gates beside it. They watch for a claim that turned out wrong, and a person can argue with any of them. This watches for a word that no longer reaches the place where a claim about it could be argued with at all.";
  "The record started full and may only shrink. A hundred and nine words were already in that state when the store was first read for this, and taking a mark off is a mend to one explanation rather than a sweep, because where the mark should have been cut is a reading of the sentence it came out of.";
  ("All of them have gone. On the second of October the sweep found none, where the record still held a hundred and two - every quotation mark, comma, semicolon and full stop among them, down to the Hebrew letter names that head the parts of Psalm one hundred and nineteen. Nine hundred and sixty seven of the store's nine hundred and seventy nine chapters had been rewritten in one minute that morning, so this was a pass over the store and not a hundred and two readings of a hundred and two sentences. The record was emptied on purpose with ",
    fn_name("baseline_known_clear"),
    " naming the file, which leaves the gate ratcheting against nothing - the stricter setting, since a word arriving with a mark on it is now refused where a hundred and two of them were allowed through by name.");
  ("It refused six of them the same afternoon, which is the gate working rather than the clearing being wrong. All six wear a straight single quote or a trailing stop - 'Kanus-a, 'Kini, 'Mao, didto.', kaniya; and kaniya. - and all six stand in Isaiah twenty nine to forty, the twelve chapters written after the pass and the only ones in the store not rewritten by it. They are not added to the record. A word that reached the store this afternoon is the one case this gate was built to refuse, and the chapters it stands in are being authored as this is read, so the mark comes off where the authoring is rather than from outside it.");
  ("A store that is not on the disk is passed over and said so, rather than counted as clean. The store lives on a drive that is not always mounted, and every Claude in the repo runs this gate - a sweep that read nothing and called it nought would turn one unmounted drive into a record wiped for everybody.");
  ("How many chapters were walked travels out beside the verdict, because finding none and reaching none are the same word otherwise.");
  arguments_assert(arguments, 0);
  let unread = await app_ceb_bible_gloss_stored_not_is();
  if (unread) {
    let skipped = {
      skipped: 1,
    };
    return skipped;
  }
  let offenders = await app_ceb_bible_gloss_words_edged_names();
  let path = app_ceb_bible_gloss_words_edged_baseline_path();
  let told = await baseline_names_gate_generic(
    offenders,
    path,
    "these explanations are written against a word that still carries a mark from the sentence around it, so every root and affix check asks the dictionary under a spelling it does not hold and passes the word over without a word - open the chapter at that word and write the explanation against the word alone, leaving the mark in the verse where it belongs",
    fn_name("app_ceb_bible_gloss_words_edged_baseline_write"),
  );
  let r = await app_ceb_bible_gloss_gate_told_chapters(told);
  return r;
}

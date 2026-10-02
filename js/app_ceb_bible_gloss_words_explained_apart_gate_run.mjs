import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_stored_not_is } from "./app_ceb_bible_gloss_stored_not_is.mjs";
import { app_ceb_bible_gloss_words_explained_apart_names } from "./app_ceb_bible_gloss_words_explained_apart_names.mjs";
import { app_ceb_bible_gloss_words_explained_apart_baseline_path } from "./app_ceb_bible_gloss_words_explained_apart_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { app_ceb_bible_gloss_gate_told_chapters } from "./app_ceb_bible_gloss_gate_told_chapters.mjs";
export async function app_ceb_bible_gloss_words_explained_apart_gate_run() {
  "Gate: no Cebuano gloss chapter authored from here on may explain a word one way where another chapter explains it another way. Throws so the dispatcher seam exits nonzero.";
  "★ THIS IS THE ONLY GATE OVER THE STORE THAT ASKS NOBODY ANYTHING. Every other reading of these explanations puts its question to binisaya.com, which means it is answerable only where the dictionary holds the word, and the dictionary is silent on four fifths of them. One word does not come from two unrelated roots, so where the app explains a word two ways it has written something wrong somewhere - and that is settled from the disk alone, with no network reached and nothing fetched.";
  "The record starts full and may only shrink. Thirty six words of three hundred and sixty three were explained two ways when the store was first read for this, and not every one of them is a fault: one root can stand behind another, so a word explained as tarong and as matarong may be explained rightly twice at two depths. What cannot be right twice is tarong and taro, and which of the two a row is is a person's reading rather than a rule's - so the record holds the ones already looked at and the gate watches for the ones that are not.";
  "★ ALL THIRTY SIX WENT STALE ON THE SECOND OF OCTOBER WITHOUT ONE OF THEM BEING MENDED, AND THE RECORD WAS LEFT STANDING BECAUSE OF IT. The walk now finds none at all, and the gate asks for the record to be shrunk to nothing. It must not be: two of the thirty six were opened and both are still explained two ways on the disk this minute. maluluy-on is taken back to kalooy in one chapter, to looy in another and to luoy in a third. nagapangita is taken back to kita in one, to pangita in another, and a third says the root behind it is pangit. Nothing was decided about either of them. A record shrunk here would forget thirty six reading jobs that are all still open.";
  "What moved was the wording in the store and not the store's content. The reader under this one matches the word root followed by a quoted word and nothing else, which its own prose says out loud and tells a caller to fall back on; and the pass that rewrote nine hundred and sixty seven of the store's nine hundred and seventy nine chapters that morning writes comes from kalooy and binisaya.com takes it back to kalooy instead. Both name a root as plainly as the first, and neither is read. So a word whose two explanations used to say root is twice now says it at most once, one claim is not two, and the word drops out of a reading that was never looking at the store so much as at one way of writing about it. The sightings the claimed reader finds among the disagreements fell from eight hundred and thirty to twelve while nothing beneath this gate was touched for three weeks.";
  "The cure is not here and it is not a shrink. The wider reader already exists beside the strict one and reads four wordings rather than one, and pointing this gate at it would make the thirty six visible again - but it would also find words nobody has ever read, so the record would have to be seeded afresh at a size nobody has measured, and that is a person's decision rather than a sweep's. Until it is made, this gate is red on purpose and the thirty six are kept.";
  "★ IT IS NOT THE GATE BESIDE IT, WHICH WATCHES THE READER RATHER THAN THE STORE. The reader that finds these words has its own gate, and that one holds a corpus of words it must go on finding, so it goes red when the reading is broken. This one goes red when the reading is working perfectly and the store has gained a disagreement that was not there before. Neither can stand in for the other: a reader nobody has broken will report a new fault all day without a word of complaint.";
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
  let offenders = await app_ceb_bible_gloss_words_explained_apart_names();
  let path = app_ceb_bible_gloss_words_explained_apart_baseline_path();
  let told = await baseline_names_gate_generic(
    offenders,
    path,
    "this word is now explained one way in one chapter and another way in another, and no dictionary is needed to see that one of them is wrong - open both passages, keep the explanation that is right and mend the other, or bank the row if the two claims are one root read at two depths",
    fn_name("app_ceb_bible_gloss_words_explained_apart_baseline_write"),
  );
  let r = await app_ceb_bible_gloss_gate_told_chapters(told);
  return r;
}

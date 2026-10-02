import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_stored_not_is } from "./app_ceb_bible_gloss_stored_not_is.mjs";
import { app_ceb_bible_gloss_words_explained_apart_names } from "./app_ceb_bible_gloss_words_explained_apart_names.mjs";
import { app_ceb_bible_gloss_words_explained_apart_baseline_path } from "./app_ceb_bible_gloss_words_explained_apart_baseline_path.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_ceb_bible_gloss_gate_told_chapters } from "./app_ceb_bible_gloss_gate_told_chapters.mjs";
export async function app_ceb_bible_gloss_words_explained_apart_gate_run() {
  "Gate: no Cebuano gloss chapter authored from here on may explain a word one way where another chapter explains it another way. Throws so the dispatcher seam exits nonzero.";
  "★ THIS IS THE ONLY GATE OVER THE STORE THAT ASKS NOBODY ANYTHING. Every other reading of these explanations puts its question to binisaya.com, which means it is answerable only where the dictionary holds the word, and the dictionary is silent on four fifths of them. One word does not come from two unrelated roots, so where the app explains a word two ways it has written something wrong somewhere - and that is settled from the disk alone, with no network reached and nothing fetched.";
  "The record starts full and may only shrink. Eight hundred and three words of twelve thousand three hundred and forty five are explained two ways, and not every one of them is a fault: one root can stand behind another, so a word explained as tarong and as matarong may be explained rightly twice at two depths. What cannot be right twice is tarong and taro, and which of the two a row is is a person's reading rather than a rule's - so the record holds the ones already looked at and the gate watches for the ones that are not.";
  "★ THIS WATCHED THIRTY SIX WORDS UNTIL THE SECOND OF OCTOBER AND WENT BLIND ON ALL THIRTY SIX IN ONE MORNING. The reader under it matched the word root followed by a quoted word and nothing else, which its own prose says out loud and tells a caller to fall back on. The pass that rewrote nine hundred and sixty seven of the store's nine hundred and seventy nine chapters that morning writes comes from kalooy and binisaya.com takes it back to kalooy instead. Both name a root as plainly as the first, and neither was read. So a word whose two explanations used to say root is twice said it at most once, one claim is not two, and the word fell out of a reading that was never looking at the store so much as at one way of writing about it. The sightings fell from eight hundred and thirty to twelve while nothing beneath this gate had been touched for three weeks, and the gate asked for the record to be shrunk to nothing - while maluloy-on was still taken back to kalooy in one chapter and luoy in another, and nagapangita to kita, pangita and pangit in three.";
  "What that cost is worth writing down, because the shape recurs. Nothing in a stale count says which of four things happened: the word was mended, the sentences went away, the mark was withdrawn, or the reading stopped seeing a wording that is still there. The count is the same number in all four cases. What tells them apart costs seconds: ask whether the reader still finds one of its own kind anywhere today, and grep the store for the very token the record names. Gone from the bytes means mended; still in the bytes means the reading went blind.";
  "★ THE READING WAS WIDENED AND THE RECORD STARTED AGAIN, ON A PERSON'S SAY-SO, ON THE SECOND OF OCTOBER. The wider reader beside the strict one reads four wordings rather than one, and the walk under this gate was pointed at it. Eight hundred and three words came back apart across nine hundred and eighty chapters and six hundred and ninety thousand entries - seven hundred and forty eight of them with two claims, forty nine with three, four with four and two with five. None of those is new in the store; what is new is that they can be seen. A ratchet measured against a floor set by a blinder reading measures the reading rather than the store, so the floor was moved once by name and may only shrink from there.";
  "Eleven of the eight hundred and three are the wider reader's own known cost and are kept rather than filtered. It reads a one-word English meaning as though it were a root, so iyang carries iya, siya and his, and kaniya carries niya and him. They are eleven rows out of eight hundred and three, each one a reading job like any other, and a filter guessing at which short word is English would throw away real Cebuano roots to be rid of them.";
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

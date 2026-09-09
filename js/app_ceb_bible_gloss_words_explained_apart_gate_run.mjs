import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_stored_is } from "./app_ceb_bible_gloss_stored_is.mjs";
import { not } from "./not.mjs";
import { app_ceb_bible_gloss_words_explained_apart_names } from "./app_ceb_bible_gloss_words_explained_apart_names.mjs";
import { app_ceb_bible_gloss_words_explained_apart_baseline_path } from "./app_ceb_bible_gloss_words_explained_apart_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { gloss_gate_told_chapters } from "./gloss_gate_told_chapters.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
export async function app_ceb_bible_gloss_words_explained_apart_gate_run() {
  "Gate: no Cebuano gloss chapter authored from here on may explain a word one way where another chapter explains it another way. Throws so the dispatcher seam exits nonzero.";
  "★ THIS IS THE ONLY GATE OVER THE STORE THAT ASKS NOBODY ANYTHING. Every other reading of these explanations puts its question to binisaya.com, which means it is answerable only where the dictionary holds the word, and the dictionary is silent on four fifths of them. One word does not come from two unrelated roots, so where the app explains a word two ways it has written something wrong somewhere - and that is settled from the disk alone, with no network reached and nothing fetched.";
  "The record starts full and may only shrink. Thirty six words of three hundred and sixty three were explained two ways when the store was first read for this, and not every one of them is a fault: one root can stand behind another, so a word explained as tarong and as matarong may be explained rightly twice at two depths. What cannot be right twice is tarong and taro, and which of the two a row is is a person's reading rather than a rule's - so the record holds the ones already looked at and the gate watches for the ones that are not.";
  "★ IT IS NOT THE GATE BESIDE IT, WHICH WATCHES THE READER RATHER THAN THE STORE. The reader that finds these words has its own gate, and that one holds a corpus of words it must go on finding, so it goes red when the reading is broken. This one goes red when the reading is working perfectly and the store has gained a disagreement that was not there before. Neither can stand in for the other: a reader nobody has broken will report a new fault all day without a word of complaint.";
  "A store that is not on the disk is passed over and said so, rather than counted as clean. The store lives on a drive that is not always mounted, and every Claude in the repo runs this gate - a sweep that read nothing and called it nought would turn one unmounted drive into a record wiped for everybody.";
  "How many chapters were walked travels out beside the verdict, because finding none and reaching none are the same word otherwise.";
  arguments_assert(arguments, 0);
  let stored = await app_ceb_bible_gloss_stored_is();
  let unread = not(stored);
  if (unread) {
    let skipped = {
      skipped: 1,
    };
    return skipped;
  }
  let offenders = await app_ceb_bible_gloss_words_explained_apart_names();
  let path = app_ceb_bible_gloss_words_explained_apart_baseline_path();
  let name_write = fn_name(
    "app_ceb_bible_gloss_words_explained_apart_baseline_write",
  );
  let told = await baseline_names_gate_generic(
    offenders,
    path,
    "this word is now explained one way in one chapter and another way in another, and no dictionary is needed to see that one of them is wrong - open both passages, keep the explanation that is right and mend the other, or bank the row if the two claims are one root read at two depths",
    name_write,
  );
  let r = await gloss_gate_told_chapters(app_ceb_bible_gloss_generate, told);
  return r;
}

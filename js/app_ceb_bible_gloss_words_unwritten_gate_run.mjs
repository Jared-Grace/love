import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_stored_is } from "./app_ceb_bible_gloss_stored_is.mjs";
import { not } from "./not.mjs";
import { app_ceb_bible_gloss_words_unwritten_names } from "./app_ceb_bible_gloss_words_unwritten_names.mjs";
import { app_ceb_bible_gloss_words_unwritten_baseline_path } from "./app_ceb_bible_gloss_words_unwritten_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { gloss_gate_told_chapters } from "./gloss_gate_told_chapters.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
export async function app_ceb_bible_gloss_words_unwritten_gate_run() {
  "Gate: no Cebuano gloss word authored from here on may be a word the whole Cebuano translation never writes standing alone. Throws so the dispatcher seam exits nonzero.";
  "★ AN EXPLANATION IS PAINTED UNDER A WORD OF THE VERSE, SO A WORD NAMED HERE IS AN EXPLANATION THE READER FINDS NOTHING TO STAND ON. It is not a complaint about the language. Every explained word was supposed to have been taken out of the passage it sits under, so a word the translation never writes at all is a spelling that went wrong on the way in, or an explanation written about something the passage does not say.";
  "The witness is the translation, which the gloss pipeline did not produce - that is the only reason an answer from it settles anything. Asking the store whether it knows a word it invented is circular; the translation was written by somebody else and covers sixty-six books.";
  "The record starts with one word rather than empty, and it may only shrink. One word out of eleven thousand explained is the store in good order, and it is a reading job for a person rather than a sweep, so the tail is held where it is while that waits.";
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
  let offenders = await app_ceb_bible_gloss_words_unwritten_names();
  let path = app_ceb_bible_gloss_words_unwritten_baseline_path();
  let name_write = fn_name(
    "app_ceb_bible_gloss_words_unwritten_baseline_write",
  );
  let told = await baseline_names_gate_generic(
    offenders,
    path,
    "the Cebuano translation never writes these explained words standing anywhere in sixty-six books, so the reader has nothing to paint the explanation under - open the passage the word is explained in and mend the spelling to the word the verse actually writes, or take the explanation away if the passage does not carry the word at all",
    name_write,
  );
  let r = await gloss_gate_told_chapters(app_ceb_bible_gloss_generate, told);
  return r;
}

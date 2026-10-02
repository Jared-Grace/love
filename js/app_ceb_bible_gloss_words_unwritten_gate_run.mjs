import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_stored_not_is } from "./app_ceb_bible_gloss_stored_not_is.mjs";
import { app_ceb_bible_gloss_words_unwritten_names } from "./app_ceb_bible_gloss_words_unwritten_names.mjs";
import { app_ceb_bible_gloss_words_unwritten_baseline_path } from "./app_ceb_bible_gloss_words_unwritten_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { app_ceb_bible_gloss_gate_told_chapters } from "./app_ceb_bible_gloss_gate_told_chapters.mjs";
export async function app_ceb_bible_gloss_words_unwritten_gate_run() {
  "Gate: no Cebuano gloss word authored from here on may be a word the whole Cebuano translation never writes standing alone. Throws so the dispatcher seam exits nonzero.";
  "★ AN EXPLANATION IS PAINTED UNDER A WORD OF THE VERSE, SO A WORD NAMED HERE IS AN EXPLANATION THE READER FINDS NOTHING TO STAND ON. It is not a complaint about the language. Every explained word was supposed to have been taken out of the passage it sits under, so a word the translation never writes at all is a spelling that went wrong on the way in, or an explanation written about something the passage does not say.";
  "The witness is the translation, which the gloss pipeline did not produce - that is the only reason an answer from it settles anything. Asking the store whether it knows a word it invented is circular; the translation was written by somebody else and covers sixty-six books.";
  "The record started with one word rather than empty, because one word out of eleven thousand explained was the store in good order and mending it was a reading job for a person rather than a sweep. That reading job is done. On the second of October the store held nineteen thousand six hundred and twenty two explained words over nine hundred and seventy nine chapters, none of them unwritten, and the word the record had been holding was no longer spelled anywhere in the store at all - so somebody had mended or withdrawn the explanation rather than the reading having failed to reach it.";
  ("So the record is empty now, and that had to be said out loud with ",
    fn_name("baseline_known_clear"),
    " naming the file, because a rewriter that let a record holding names fall to none would be a ratchet that could forget them. Empty is the stricter setting and not the looser one: the gate now ratchets against nothing, so the next word of this kind is refused where before one of them was allowed through by name.");
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
  let offenders = await app_ceb_bible_gloss_words_unwritten_names();
  let path = app_ceb_bible_gloss_words_unwritten_baseline_path();
  let told = await baseline_names_gate_generic(
    offenders,
    path,
    "the Cebuano translation never writes these explained words standing anywhere in sixty-six books, so the reader has nothing to paint the explanation under - open the passage the word is explained in and mend the spelling to the word the verse actually writes, or take the explanation away if the passage does not carry the word at all",
    fn_name("app_ceb_bible_gloss_words_unwritten_baseline_write"),
  );
  let r = await app_ceb_bible_gloss_gate_told_chapters(told);
  return r;
}

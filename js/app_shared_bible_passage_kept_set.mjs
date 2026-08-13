import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_passage_kept_key } from "./app_shared_bible_passage_kept_key.mjs";
import { storage_session_set_context } from "./storage_session_set_context.mjs";
export function app_shared_bible_passage_kept_set(
  context,
  chapter_code,
  verse_numbers,
) {
  "Remember the passage being read, for this tab, so there is somewhere to come back to if the reader goes off to choose a different one and changes their mind.";
  "The reader says this as it draws rather than the pickers saying it as they open, and that is the whole reason it is right. There is more than one way out of a reading screen, and a note taken at each door is a note somebody forgets to take at the next door somebody adds. What is drawn is what you were on, whichever way you left it.";
  "The verses are a list because the readers disagree about how many there are, and all of them are right: a verse reader is standing on one, a whole-chapter reader may have several picked or none at all. A list says all three, and none is the empty one rather than a missing word - a chapter with nothing picked in it is still a place to come back to.";
  "Kept per tab, like the screen beside it: two tabs reading two passages must each come back to their own.";
  arguments_assert(arguments, 3);
  let key = app_shared_bible_passage_kept_key();
  let kept = {
    chapter_code,
    verse_numbers,
  };
  storage_session_set_context(context, key, kept);
}

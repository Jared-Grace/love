import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_verse_hash_key } from "./app_shared_bible_verse_hash_key.mjs";
import { app_shared_bible_verses_separator } from "./app_shared_bible_verses_separator.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_split } from "./text_split.mjs";
export function app_shared_bible_hash_verse_numbers(hash) {
  "Which verses a link asks for, as a list - none of them when the link says nothing about verses.";
  "A link can name one verse or a run of them, so reading it always gives a list and a reader wanting the single one takes the first. Read as a plain word instead, the run came back as the two ends with a dash still between them, and every place that then looked that word up in a chapter found nothing there.";
  "Nothing said is the empty list rather than a guess at the first verse. A whole-chapter reader with no verse in its link is showing the chapter with nothing picked, which is a state it has, and answering 1 would put a highlight on a verse nobody chose.";
  arguments_assert(arguments, 1);
  let key = app_shared_bible_verse_hash_key();
  let written = property_get_or(hash, key, "");
  let unsaid = text_empty_is(written);
  if (unsaid) {
    let r = [];
    return r;
  }
  let separator = app_shared_bible_verses_separator();
  let verse_numbers = text_split(written, separator);
  return verse_numbers;
}

import { reply_words } from "./reply_words.mjs";
import { reply_bible_verse_whole } from "./reply_bible_verse_whole.mjs";
export function reply_bible_1jn_4_8() {
  "1 John 4:8, in the wording a real message used. Other wordings are added when somebody really sends them.";
  let read = reply_words(
    "he who does not love does not know god for god is love",
  );
  let noted = reply_bible_verse_whole("1JN04", "8", read);
  return noted;
}

import { reply_words } from "./reply_words.mjs";
import { reply_bible_verse_whole } from "./reply_bible_verse_whole.mjs";
export function reply_bible_1jn_4_9() {
  "1 John 4:9, in the wording a real message used. Other wordings are added when somebody really sends them.";
  let read = reply_words(
    "in this was manifested the love of god among us because god sent his only begotten son into the world that we might live through him",
  );
  let noted = reply_bible_verse_whole("1JN04", "9", read);
  return noted;
}

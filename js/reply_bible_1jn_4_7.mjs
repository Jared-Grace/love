import { reply_words } from "./reply_words.mjs";
import { reply_bible_verse_whole } from "./reply_bible_verse_whole.mjs";
export function reply_bible_1jn_4_7() {
  "1 John 4:7, in the wording a real message used. Other wordings are added when somebody really sends them.";
  let read = reply_words(
    "beloved let us love one another for love is from god and everyone who loves has been born of god and knows god",
  );
  let noted = reply_bible_verse_whole("1JN04", "7", read);
  return noted;
}

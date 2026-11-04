import { reply_words } from "./reply_words.mjs";
import { reply_bible_verse_whole } from "./reply_bible_verse_whole.mjs";
export function reply_bible_1jn_4_10() {
  "1 John 4:10, in the wording a real message used. Other wordings are added when somebody really sends them.";
  let read = reply_words(
    "herein is love not that we loved god but that he loved us and sent his son to be the propitiation for our sins",
  );
  let noted = reply_bible_verse_whole("1JN04", "10", read);
  return noted;
}

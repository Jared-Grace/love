import { reply_words } from "./reply_words.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_phrase_jesus } from "./reply_phrase_jesus.mjs";
import { reply_bible_verse_whole } from "./reply_bible_verse_whole.mjs";
export function reply_bible_1jn_3_23() {
  "1 John 3:23, in the wording a real message used. Other wordings are added when somebody really sends them.";
  let start = reply_words(
    "and this is his commandment that we should believe in the name of his son",
  );
  let end = reply_words("and love one another as he hath commanded us");
  let phrase_jesus = reply_phrase_jesus();
  let read = reply_sequence([start, phrase_jesus, end]);
  let noted = reply_bible_verse_whole("1JN03", "23", read);
  return noted;
}

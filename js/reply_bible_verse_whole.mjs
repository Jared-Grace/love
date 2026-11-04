import { reply_on_match_bible_reference } from "./reply_on_match_bible_reference.mjs";
export function reply_bible_verse_whole(chapter_code, verse_number, read) {
  "A verse the sender said all of, so it is cited back and not quoted back.";
  let noted = reply_on_match_bible_reference(
    read,
    chapter_code,
    verse_number,
    false,
  );
  return noted;
}

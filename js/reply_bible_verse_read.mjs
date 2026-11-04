import { list_map } from "./list_map.mjs";
import { reply_words_christ } from "./reply_words_christ.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_bible_verse_whole } from "./reply_bible_verse_whole.mjs";
export function reply_bible_verse_read(chapter_code, verse_number, wordings) {
  "One verse said whole in any of the wordings given, noting its reference.";
  let read = list_map(wordings, reply_words_christ);
  let either = reply_choice(read);
  let noted = reply_bible_verse_whole(chapter_code, verse_number, either);
  return noted;
}

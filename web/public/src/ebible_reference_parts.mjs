import { ebible_chapter_code_pad } from "../../../love/public/src/ebible_chapter_code_pad.mjs";
import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
import { list_second } from "../../../love/public/src/list_second.mjs";
import { list_multiple_is } from "../../../love/public/src/list_multiple_is.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { text_split_dash } from "../../../love/public/src/text_split_dash.mjs";
import { list_first_second } from "../../../love/public/src/list_first_second.mjs";
import { text_split_colon } from "../../../love/public/src/text_split_colon.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_find_property } from "../../../love/public/src/list_find_property.mjs";
export function ebible_reference_parts(books, book_name, chapter_verses) {
  let book = list_find_property(books, "text", book_name);
  let book_code = property_get(book, "book_code");
  let split2 = text_split_colon(chapter_verses);
  let v2 = list_first_second(split2);
  let second = property_get(v2, "second");
  let chapter_name = property_get(v2, "first");
  let chapter_code = ebible_chapter_code_pad(book_code, chapter_name);
  let verse_range = text_split_dash(second);
  let verse_start = list_first(verse_range);
  let verse_end = null;
  let m = list_multiple_is(verse_range);
  let result = null;
  if (m) {
    result = list_second(verse_range);
  } else {
    result = verse_start;
  }
  verse_end = result;
  let index = list_index_of(books, book);
  let v = {
    index,
    chapter_code,
    verse_start,
    verse_end,
  };
  return v;
}

import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
import { list_second } from "../../../love/public/src/list_second.mjs";
import { list_multiple_is } from "../../../love/public/src/list_multiple_is.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { string_split_dash } from "../../../love/public/src/string_split_dash.mjs";
import { number_pad } from "../../../love/public/src/number_pad.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { list_first_second } from "../../../love/public/src/list_first_second.mjs";
import { string_split_colon } from "../../../love/public/src/string_split_colon.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_find_property } from "../../../love/public/src/list_find_property.mjs";
export function ebible_reference_parts(books, book_name, chapter_verses) {
  let book = list_find_property(books, "text", book_name);
  let book_code = object_property_get(book, "book_code");
  let split2 = string_split_colon(chapter_verses);
  let { first: chapter_name, second } = list_first_second(split2);
  let pad_count = 2;
  if (equal(book_code, "PSA")) {
    pad_count = 3;
  }
  let chapter_padded = number_pad(chapter_name, pad_count);
  let chapter_code = book_code + chapter_padded;
  let verse_range = string_split_dash(second);
  let verse_start = list_first(verse_range);
  let verse_end = null;
  let m = list_multiple_is(verse_range);
  if (m) {
    verse_end = list_second(verse_range);
  } else {
    verse_end = verse_start;
  }
  let index = list_index_of(books, book);
  let v = {
    index,
    chapter_code,
    verse_start,
    verse_end,
  };
  return v;
}

import { ebible_references_names } from "./ebible_references_names.mjs";
import { ebible_chapter_code_pad } from "./ebible_chapter_code_pad.mjs";
import { text_split_colon } from "./text_split_colon.mjs";
import { text_split_dash } from "./text_split_dash.mjs";
import { range_from } from "./range_from.mjs";
import { list_map } from "./list_map.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { list_last } from "./list_last.mjs";
import { list_size } from "./list_size.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { property_get } from "./property_get.mjs";
export function app_shared_bible_ref_chapter_codes(ref_line, books_en) {
  let v = ebible_references_names(books_en, [ref_line]);
  let book_names = property_get(v, "book_names");
  if (list_empty_is(book_names)) {
    return [];
  }
  let chapter_verses_list = property_get(v, "chapter_verses_list");
  let book_name = list_first(book_names);
  let chapter_verses = list_first(chapter_verses_list);
  let book = list_find_property(books_en, "text", book_name);
  let book_code = property_get(book, "book_code");
  let parts = text_split_colon(chapter_verses);
  let first_chapter = list_first(parts);
  function to_code(chapter) {
    let code = ebible_chapter_code_pad(book_code, chapter);
    return code;
  }
  let single = list_size(parts) < 3;
  if (single) {
    return [to_code(first_chapter)];
  }
  let middle = list_second(parts);
  let dash = text_split_dash(middle);
  let last_chapter = list_last(dash);
  let chapters = range_from(first_chapter, last_chapter);
  let codes = list_map(chapters, to_code);
  return codes;
}

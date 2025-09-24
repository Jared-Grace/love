import { ebible_verse } from "./ebible_verse.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { each_pair_async } from "./each_pair_async.mjs";
import { each_range_from_async } from "./each_range_from_async.mjs";
import { string_to } from "./string_to.mjs";
import { list_get } from "./list_get.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_second } from "./list_second.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { list_first } from "./list_first.mjs";
import { string_split_dash } from "./string_split_dash.mjs";
import { number_pad } from "./number_pad.mjs";
import { equal } from "./equal.mjs";
import { list_first_second } from "./list_first_second.mjs";
import { string_split_colon } from "./string_split_colon.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { list_map_first } from "./list_map_first.mjs";
import { list_map_filter_string_empty_not_is } from "./list_map_filter_string_empty_not_is.mjs";
import { list_map_split_space } from "./list_map_split_space.mjs";
import { list_map_prefix_without_any } from "./list_map_prefix_without_any.mjs";
import { list_map_prefix_any } from "./list_map_prefix_any.mjs";
import { list_filter_starts_with_any } from "./list_filter_starts_with_any.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { ebible_version_books } from "./ebible_version_books.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
export async function ebible_references_parse_lines(bible_folders, lines) {
  let bible_folder = ebible_folder_english();
  let books_all = await list_map_unordered_async(
    bible_folders,
    ebible_version_books,
  );
  let books = await ebible_version_books(bible_folder);
  let mapped = list_map_property(books, "text");
  let verse_references = list_filter_starts_with_any(mapped, lines);
  let book_names = list_map_prefix_any(verse_references, mapped);
  let mapped2 = list_map_prefix_without_any(verse_references, mapped);
  let mapped3 = list_map_split_space(mapped2);
  let mapped4 = list_map_filter_string_empty_not_is(mapped3);
  let chapter_verses_list = list_map_first(mapped4);
  async function lambda2(la) {
    async function lambda(book_name, chapter_verses) {
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
      async function lambda5(bible_folder, books) {
        let book2 = list_get(books, index);
        let book_name = object_property_get(book2, "text");
        async function lambda4(verse_number) {
          verse_number = string_to(verse_number);
          let result = await ebible_verse(
            bible_folder,
            chapter_code,
            verse_number,
          );
          la(result);
        }
        await each_range_from_async(verse_start, verse_end, lambda4);
      }
      await each_pair_async(bible_folders, books_all, lambda5);
    }
    await each_pair_async(book_names, chapter_verses_list, lambda);
  }
  let list = await list_adder_async(lambda2);
  return list;
}

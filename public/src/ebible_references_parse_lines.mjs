import { ebible_references_names } from "../../../love/public/src/ebible_references_names.mjs";
import { ebible_reference_parts } from "../../../love/public/src/ebible_reference_parts.mjs";
import { ebible_verse } from "../../../love/public/src/ebible_verse.mjs";
import { list_adder_async } from "../../../love/public/src/list_adder_async.mjs";
import { each_pair_async } from "../../../love/public/src/each_pair_async.mjs";
import { each_range_from_async } from "../../../love/public/src/each_range_from_async.mjs";
import { string_to } from "../../../love/public/src/string_to.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_map_first } from "../../../love/public/src/list_map_first.mjs";
import { list_map_filter_string_empty_not_is } from "../../../love/public/src/list_map_filter_string_empty_not_is.mjs";
import { list_map_split_space } from "../../../love/public/src/list_map_split_space.mjs";
import { list_map_prefix_without_any } from "../../../love/public/src/list_map_prefix_without_any.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
export async function ebible_references_parse_lines(bible_folders, lines) {
  let bible_folder = ebible_folder_english();
  let books_all = await list_map_unordered_async(
    bible_folders,
    ebible_version_books,
  );
  let books = await ebible_version_books(bible_folder);
  let { verse_references, books_names, book_names } = ebible_references_names(
    books,
    lines,
  );
  let mapped2 = list_map_prefix_without_any(verse_references, books_names);
  let mapped3 = list_map_split_space(mapped2);
  let mapped4 = list_map_filter_string_empty_not_is(mapped3);
  let chapter_verses_list = list_map_first(mapped4);
  async function lambda2(la) {
    async function lambda(book_name, chapter_verses) {
      let { index, chapter_code, verse_start, verse_end } =
        ebible_reference_parts(books, book_name, chapter_verses);
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

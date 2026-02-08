import { log } from "../../../love/public/src/log.mjs";
import { ebible_parts_chapter_code_to_reference } from "../../../love/public/src/ebible_parts_chapter_code_to_reference.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { ebible_references_names } from "../../../love/public/src/ebible_references_names.mjs";
import { ebible_reference_parts } from "../../../love/public/src/ebible_reference_parts.mjs";
import { ebible_verse } from "../../../love/public/src/ebible_verse.mjs";
import { list_adder_async } from "../../../love/public/src/list_adder_async.mjs";
import { each_pair_async } from "../../../love/public/src/each_pair_async.mjs";
import { each_range_from_async } from "../../../love/public/src/each_range_from_async.mjs";
import { text_to } from "../../../love/public/src/text_to.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
import { catch_ignore_async } from "../../../love/public/src/catch_ignore_async.mjs";
import { object_assign } from "../../../love/public/src/object_assign.mjs";
export async function ebible_references_parse_lines(bible_folders, lines) {
  let bible_folder = ebible_folder_english();
  let books_all = await list_map_unordered_async(
    bible_folders,
    ebible_version_books,
  );
  let books = await ebible_version_books(bible_folder);
  let v = ebible_references_names(books, lines);
  let book_names = object_property_get(v, "book_names");
  let chapter_verses_list = object_property_get(v, "chapter_verses_list");
  async function lambda2(la) {
    async function lambda(book_name, chapter_verses) {
      let v2 = ebible_reference_parts(books, book_name, chapter_verses);
      let verse_end = object_property_get(v2, "verse_end");
      let verse_start = object_property_get(v2, "verse_start");
      let chapter_code = object_property_get(v2, "chapter_code");
      let index = object_property_get(v2, "index");
      async function lambda5(bible_folder, books) {
        let book2 = list_get(books, index);
        let book_name = object_property_get(book2, "text");
        async function lambda4(verse_number) {
          await catch_ignore_async(verse_get);
          async function verse_get() {
            verse_number = text_to(verse_number);
            let result = await ebible_verse(
              bible_folder,
              chapter_code,
              verse_number,
            );
            let reference = ebible_parts_chapter_code_to_reference(
              chapter_code,
              books,
              [verse_number],
            );
            object_merge(result, {
              reference,
            });
            object_assign(result, {
              chapter_code,
            });
            return result;
          }
          la(verse_get);
        }
        await each_range_from_async(verse_start, verse_end, lambda4);
      }
      await each_pair_async(bible_folders, books_all, lambda5);
    }
    await each_pair_async(book_names, chapter_verses_list, lambda);
  }
  let list = await list_adder_async(lambda2);
  async function lambda3(verse_get) {
    let v3 = await catch_ignore_async(verse_get);
    return v3;
  }
  let waited = await list_map_unordered_async(list, lambda3);
  log({
    waited,
  });
  return waited;
}

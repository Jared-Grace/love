import { object_assign } from "../../../love/public/src/object_assign.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { catch_ignore_async } from "../../../love/public/src/catch_ignore_async.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { each_pair } from "../../../love/public/src/each_pair.mjs";
import { each_range_from } from "../../../love/public/src/each_range_from.mjs";
import { ebible_parts_chapter_code_to_reference } from "../../../love/public/src/ebible_parts_chapter_code_to_reference.mjs";
import { text_to } from "../../../love/public/src/text_to.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { ebible_reference_parts } from "../../../love/public/src/ebible_reference_parts.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { ebible_references_names } from "../../../love/public/src/ebible_references_names.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
export async function ebible_references_parse_lines_generic(
  bible_folders,
  books_get,
  lines,
  verse_get,
) {
  let bible_folder = ebible_folder_english();
  let books_all = await list_map_unordered_async(bible_folders, books_get);
  let books = await books_get(bible_folder);
  let v = ebible_references_names(books, lines);
  let book_names = property_get(v, "book_names");
  let chapter_verses_list = property_get(v, "chapter_verses_list");
  function lambda2(la) {
    function lambda(book_name, chapter_verses) {
      let v2 = ebible_reference_parts(books, book_name, chapter_verses);
      let verse_end = property_get(v2, "verse_end");
      let verse_start = property_get(v2, "verse_start");
      let chapter_code = property_get(v2, "chapter_code");
      let index = property_get(v2, "index");
      function each_version(bible_folder, books) {
        let book2 = list_get(books, index);
        let book_name = property_get(book2, "text");
        function lambda4(verse_number) {
          verse_number = text_to(verse_number);
          let reference = ebible_parts_chapter_code_to_reference(
            chapter_code,
            books,
            [verse_number],
          );
          la({
            bible_folder,
            chapter_code,
            verse_number,
            reference,
          });
        }
        each_range_from(verse_start, verse_end, lambda4);
      }
      each_pair(bible_folders, books_all, each_version);
    }
    each_pair(book_names, chapter_verses_list, lambda);
  }
  let list = list_adder(lambda2);
  async function lambda3(v) {
    let reference = property_get(v, "reference");
    let verse_number = property_get(v, "verse_number");
    let chapter_code = property_get(v, "chapter_code");
    let bible_folder = property_get(v, "bible_folder");
    let v3 = await catch_ignore_async(verse_get_lambda);
    async function verse_get_lambda() {
      let result = await verse_get(bible_folder, chapter_code, verse_number);
      object_merge(result, {
        reference,
      });
      object_assign(result, {
        chapter_code,
      });
      return result;
    }
    return v3;
  }
  let waited = await list_map_unordered_async(list, lambda3);
  return waited;
}

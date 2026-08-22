import { object_copy } from "./object_copy.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { object_assign } from "./object_assign.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { list_adder } from "./list_adder.mjs";
import { each_pair } from "./each_pair.mjs";
import { each_range_from } from "./each_range_from.mjs";
import { ebible_parts_chapter_code_to_reference } from "./ebible_parts_chapter_code_to_reference.mjs";
import { text_to } from "./text_to.mjs";
import { ebible_reference_parts } from "./ebible_reference_parts.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_references_names } from "./ebible_references_names.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
export async function ebible_references_parse_lines_generic(
  books_get,
  bible_folders,
  lines,
  verse_get,
) {
  "WHAT THE READER HANDS BACK IS COPIED BEFORE ANYTHING IS WRITTEN ON IT. The browser's reader keeps every verse it has fetched for the life of the page and hands the same object back the second time, so writing the reference onto that object wrote it into what is kept. The writing is strict - it refuses a property that is already there - so the second time anybody asked for a verse this page had already read, it threw, the catch below turned that into nothing, and the passage came out blank with no error anywhere.";
  "It showed up on a page that names the same verse under two different lines, which is ordinary once a page explains something rather than just displaying it. Copying costs one small object per verse and takes the shared thing out of reach.";
  "ONE REFERENCE THAT NAMES NO VERSE IS STEPPED OVER, AND THE REST OF THE PAGE STILL FILLS. Reading these is one straight run through every reference on the page, so a reference the reader cannot take apart used to end the run where it stood and every reference after it was never looked at. Jude 24, written without the chapter a book of one chapter still needs, left fourteen of a song's thirty-six lines with no Scripture under them - while the page above them looked finished, because the lines were drawn before the words were fetched.";
  "Stepped over, such a reference comes back holding nothing, which is the same answer as a reference this bible does not carry and is already drawn as the reference alone with no words beneath it. So the one bad entry is visible to the reader who could mend it, and costs only itself.";
  let bible_folder = ebible_folder_english();
  let books_all = await list_map_unordered_async(bible_folders, books_get);
  let books = await books_get(bible_folder);
  let v = ebible_references_names(books, lines);
  let book_names = property_get(v, "book_names");
  let chapter_verses_list = property_get(v, "chapter_verses_list");
  function lambda2(la) {
    function lambda(book_name, chapter_verses) {
      let reference = text_combine_multiple([book_name, " ", chapter_verses]);
      let shaped = bible_reference_chapter_verse_shape_is(reference);
      let unshaped = not(shaped);
      if (unshaped) {
        return;
      }
      let v2 = ebible_reference_parts(books, book_name, chapter_verses);
      let verse_end = property_get(v2, "verse_end");
      let verse_start = property_get(v2, "verse_start");
      let chapter_code = property_get(v2, "chapter_code");
      property_get(v2, "book_code");
      function each_version(bible_folder_each, books_each) {
        function lambda4(verse_number) {
          verse_number = text_to(verse_number);
          la({
            bible_folder: bible_folder_each,
            chapter_code,
            verse_number,
          });
        }
        each_range_from(verse_start, verse_end, lambda4);
      }
      each_pair(bible_folders, books_all, each_version);
    }
    each_pair(book_names, chapter_verses_list, lambda);
  }
  let list = list_adder(lambda2);
  async function lambda3(v4) {
    let property_name = verse_number_key();
    let verse_number = property_get(v4, property_name);
    let chapter_code = property_get(v4, "chapter_code");
    let property_name2 = bible_folder_key();
    let bible_folder_of_verse = property_get(v4, property_name2);
    let v3 = await catch_null_async(verse_get_lambda);
    async function verse_get_lambda() {
      let reference = ebible_parts_chapter_code_to_reference(
        chapter_code,
        books,
        [verse_number],
      );
      let held = await verse_get(
        bible_folder_of_verse,
        chapter_code,
        verse_number,
      );
      let result = object_copy(held);
      object_merge_set(result, {
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

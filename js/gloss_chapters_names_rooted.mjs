import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { each_async } from "./each_async.mjs";
import { file_name_json_name } from "./file_name_json_name.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { gloss_chapter_names_rooted } from "./gloss_chapter_names_rooted.mjs";
import { gloss_words_capitalised_always } from "./gloss_words_capitalised_always.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_map_unique } from "./list_map_unique.mjs";
import { list_size } from "./list_size.mjs";
import { local_function_folder } from "./local_function_folder.mjs";
import { property_get } from "./property_get.mjs";
import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";
import { property_set } from "./property_set.mjs";
export async function gloss_chapters_names_rooted(fn, bible_folder) {
  "Every chapter of one gloss store holding an explanation that tells a reader what a name is built from, where the name is a word the book it stands in never once writes in small letters.";
  "This is the one reading that separates a store whose explanations are all written from a store whose explanations are all true, over the one mistake nothing else here can catch. A missing explanation is visible to anybody who opens the passage; an explanation that quietly takes a place name apart looks exactly like a good one, and the reader most likely to keep it is the one who did not already know the place.";
  "Which words a book only ever capitalises is worked out once for each book rather than once for each chapter, because that reading walks every chapter of the book to make it - asked per chapter over a store of two hundred chapters it would read the same books over and over, and each reading is the slow part.";
  "The count of books consulted comes back beside the findings, because no findings means one thing when every book has been read and quite another when the store holds chapters of books this could not open.";
  let folder = local_function_folder(fn);
  let file_names = await folder_read_files_exists_ensure(folder);
  let chapter_codes = list_map(file_names, file_name_json_name);
  let book_codes = list_map_unique(chapter_codes, ebible_chapter_code_to_book);
  let capitalised_by_book = {};
  async function book_read(book_code) {
    let capitalised = await gloss_words_capitalised_always(
      bible_folder,
      book_code,
    );
    property_set(capitalised_by_book, book_code, capitalised);
  }
  await each_async(book_codes, book_read);
  async function chapter_read(chapter_code) {
    let book_code = ebible_chapter_code_to_book(chapter_code);
    let capitalised = property_get(capitalised_by_book, book_code);
    let rooted = await gloss_chapter_names_rooted(chapter_code, fn, capitalised);
    let chapter_row = {
      chapter_code,
      rooted,
    };
    return chapter_row;
  }
  let chapters = await list_map_async(chapter_codes, chapter_read);
  function rooted_is(chapter) {
    let offending = property_list_empty_not_is(chapter, "rooted");
    return offending;
  }
  let offenders = list_filter(chapters, rooted_is);
  let r = {
    books: list_size(book_codes),
    offenders,
  };
  return r;
}

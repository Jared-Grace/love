import { ebible_firebase_folder_prefix } from "./ebible_firebase_folder_prefix.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { firebase_storage_list_page } from "./firebase_storage_list_page.mjs";
import { property_get } from "./property_get.mjs";
import { text_split_slash_forward } from "./text_split_slash_forward.mjs";
import { list_last } from "./list_last.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { list_map_unique } from "./list_map_unique.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { list_size } from "./list_size.mjs";
import { null_not_is } from "./null_not_is.mjs";
export async function ebible_bible_folder_storage_books_first_page(
  bible_folder,
) {
  "$plain bible_folder";
  "Which books storage actually holds for one bible, read off the names in its folder rather than by asking for any of them.";
  "ASKING WHAT IS THERE BEATS GUESSING WHAT TO ASK FOR. Asking book by book only ever answers about the books somebody thought to name, so a bible holding one short letter and nothing else answers no to every guess and reads as holding nothing at all. The names in the folder are the whole truth about it and cost one request to read.";
  "ONE PAGE AND NO MORE. A thousand names is far past what any partial bible has, so a full page settles the question this is asked for - whether anything is there at all - before the rest of the pages could add to it. Whether there are more is handed back rather than hidden, so nobody reads a book list as complete when it was cut off.";
  "THE FOLDER OPENING ENDS IN A SEPARATOR, which is what keeps a short folder name from answering for every longer one that starts the same way.";
  let prefix = ebible_firebase_folder_prefix(bible_folder);
  let project_url = firebase_storage_url_project_jg();
  let page = await firebase_storage_list_page(project_url, prefix, null);
  let names = property_get(page, "names");
  function lambda(name) {
    let parts = text_split_slash_forward(name);
    let file_name = list_last(parts);
    let book_code = ebible_chapter_code_to_book(file_name);
    return book_code;
  }
  let unsorted = list_map_unique(names, lambda);
  let book_codes = list_sort_text(unsorted);
  let next = property_get(page, "next");
  let more = null_not_is(next);
  let r = {
    bible_folder,
    book_codes,
    files: list_size(names),
    more,
  };
  return r;
}

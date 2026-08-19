import { text_remove_if_starts_with } from "./text_remove_if_starts_with.mjs";
import { list_first } from "./list_first.mjs";
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
  "THE BOOK IS READ OFF THE FIRST STEP INSIDE THE FOLDER AND NEVER OFF THE LAST. One bible here is uploaded a verse to a file, under a step of its own for each chapter, so its last step is a verse number and says nothing about a book. Reading the first step answers the same for both layouts, and reading the last one turned eighteen thousand files of a whole bible into a list of numbers.";
  let prefix = ebible_firebase_folder_prefix(bible_folder);
  let project_url = firebase_storage_url_project_jg();
  let page = await firebase_storage_list_page(project_url, prefix, null);
  let names = property_get(page, "names");
  function lambda(name) {
    let inside = text_remove_if_starts_with(name, prefix);
    let parts = text_split_slash_forward(inside);
    let step = list_first(parts);
    let book_code = ebible_chapter_code_to_book(step);
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

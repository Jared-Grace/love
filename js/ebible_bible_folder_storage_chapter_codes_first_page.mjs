import { list_filter } from "./list_filter.mjs";
import { ebible_chapter_code_known_is } from "./ebible_chapter_code_known_is.mjs";
import { ebible_book_code_size } from "./ebible_book_code_size.mjs";
import { ebible_chapter_number_size } from "./ebible_chapter_number_size.mjs";
import { number_add } from "./number_add.mjs";
import { text_take } from "./text_take.mjs";
import { text_remove_if_starts_with } from "./text_remove_if_starts_with.mjs";
import { list_first } from "./list_first.mjs";
import { ebible_firebase_folder_prefix } from "./ebible_firebase_folder_prefix.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { firebase_storage_list_page } from "./firebase_storage_list_page.mjs";
import { property_get } from "./property_get.mjs";
import { text_split_slash_forward } from "./text_split_slash_forward.mjs";
import { list_map_unique } from "./list_map_unique.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { list_size } from "./list_size.mjs";
import { null_not_is } from "./null_not_is.mjs";
export async function ebible_bible_folder_storage_chapter_codes_first_page(
  bible_folder,
) {
  "$plain bible_folder";
  "Which chapters storage actually holds for one bible, read off the names in its folder rather than by asking for any of them.";
  "ASKING WHAT IS THERE BEATS GUESSING WHAT TO ASK FOR. Asking chapter by chapter only ever answers about the chapters somebody thought to name, so a bible holding one short letter and nothing else answers no to every guess and reads as holding nothing at all. The names in the folder are the whole truth about it and cost one request to read.";
  "THE CHAPTER AND NOT ONLY THE BOOK, which is what this is for and what the reading beside it cannot give. A book named is not a promise that its opening chapter is there: one bible here holds fifteen books in sixty five files, so most of its books are two or three chapters and none of them starts at one. Anything meaning to go and read something has to be told a chapter that exists, and a book code is a guess dressed as an answer.";
  "ONE PAGE AND NO MORE. A thousand names is far past what any partial bible has, so a full page settles the question this is asked for - whether anything is there at all - before the rest of the pages could add to it. Whether there are more is handed back rather than hidden, so nobody reads a chapter list as complete when it was cut off.";
  "THE FOLDER OPENING ENDS IN A SEPARATOR, which is what keeps a short folder name from answering for every longer one that starts the same way.";
  "THE CHAPTER IS READ OFF THE FIRST STEP INSIDE THE FOLDER AND NEVER OFF THE LAST. One bible here is uploaded a verse to a file, under a step of its own for each chapter, so its last step is a verse number and says nothing about a chapter. Reading the first step answers the same for both layouts, and reading the last one turned eighteen thousand files of a whole bible into a list of numbers.";
  "AND ONLY THE OPENING OF THAT STEP IS TAKEN, because the two layouts spell the rest of it differently - one ends the step in the name of a file and the other ends it there and goes on. A chapter code is a fixed length, so the same reading serves both without either being asked about.";
  "ONLY A NAME THAT SPELLS ONE OF THE CHAPTERS IS COUNTED. A bible's folder holds more than its scripture - an index of what is in it lives there too - and a folder holding an index and nothing else holds nothing anybody can read. Counting every file called that folder full, which is the one answer this must never give, because it is the answer that lets a reader be offered a language with no words in it.";
  let prefix = ebible_firebase_folder_prefix(bible_folder);
  let project_url = firebase_storage_url_project_jg();
  let page = await firebase_storage_list_page(project_url, prefix, null);
  let names = property_get(page, "names");
  let book_size = ebible_book_code_size();
  let number_size = ebible_chapter_number_size();
  let code_size = number_add(book_size, number_size);
  function lambda(name) {
    let inside = text_remove_if_starts_with(name, prefix);
    let parts = text_split_slash_forward(inside);
    let step = list_first(parts);
    let chapter_code = text_take(step, code_size);
    return chapter_code;
  }
  let derived = list_map_unique(names, lambda);
  let named = list_filter(derived, ebible_chapter_code_known_is);
  let chapter_codes = list_sort_text(named);
  let next = property_get(page, "next");
  let more = null_not_is(next);
  let r = {
    bible_folder,
    chapter_codes,
    files: list_size(names),
    more,
  };
  return r;
}

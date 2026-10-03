import { ebible_books_to_chapter_codes } from "./ebible_books_to_chapter_codes.mjs";
import { local_function_folder } from "./local_function_folder.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { list_map } from "./list_map.mjs";
import { file_name_json_name } from "./file_name_json_name.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
export async function gloss_chapters_absent_books_generic(
  fn,
  bible_folder,
  books,
) {
  "Every chapter of a given list of bible books that one gloss store holds no file for at all, with how many that is against how many there are.";
  "A store reports on what it holds, so a chapter never begun is invisible to it - it has no file to be counted as unfinished, and a report over the files alone reads as finished while most of the book is untouched. This asks the bible instead and subtracts, which is the only way the never-begun ones can be seen.";
  "The books are handed in rather than chosen here, because which testament is being worked through is the caller's question and not this one's. That is what lets one reading answer for the new testament and the old one without either of them being spelled twice.";
  "It is a report and never a gate. Chapters are authored over weeks, so a gate over this would stand red for months by design and would hold up every unrelated thing waiting behind it.";
  let all = await ebible_books_to_chapter_codes(books, bible_folder);
  let folder = local_function_folder(fn);
  let file_names = await folder_read_files_exists_ensure(folder);
  let held = list_map(file_names, file_name_json_name);
  function absent_is(chapter_code) {
    let missing = list_includes_not(held, chapter_code);
    return missing;
  }
  let absent = list_filter(all, absent_is);
  let r = {
    chapters: list_size(all),
    absent: list_size(absent),
    chapter_codes: absent,
  };
  return r;
}

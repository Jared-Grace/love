import { ebible_chapter_code_pad } from "./ebible_chapter_code_pad.mjs";
import { ebible_chapter_verse_numbers_storage_outcome } from "./ebible_chapter_verse_numbers_storage_outcome.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_filter_map_property } from "./list_filter_map_property.mjs";
import { lists_combine } from "./lists_combine.mjs";
import { list_difference } from "./list_difference.mjs";
export async function bible_folder_books_held(bible_folder, book_codes) {
  "$plain bible_folder";
  "Which of the named books one bible answers for, which it says it does not have, and which it could not be asked about.";
  "ONE FIRST CHAPTER STANDS FOR A WHOLE BOOK, because a book that is there has a first chapter and a book that is not there has nothing. Asking for more chapters would cost a download each to learn what the first one already said.";
  "HELD IS WORKED OUT BY SUBTRACTION rather than by asking a third time. Every book asked about comes back saying it is not there, or that it could not be reached, or neither - and neither is what held means. Taking the two refusals away from the list that was asked leaves it exactly, with no way for the three answers to add up to something other than what was asked for.";
  async function lambda(book_code) {
    let chapter_code = ebible_chapter_code_pad(book_code, 1);
    let outcome = await ebible_chapter_verse_numbers_storage_outcome(
      bible_folder,
      chapter_code,
    );
    let probed = {
      book_code,
      absent: property_get(outcome, "absent"),
      unreachable: property_get(outcome, "unreachable"),
    };
    return probed;
  }
  let each = await list_map_unordered_async(book_codes, lambda);
  function lambda2(probed) {
    let told = property_get(probed, "absent");
    return told;
  }
  let absent = list_filter_map_property(each, lambda2, "book_code");
  function lambda3(probed) {
    let told = property_get(probed, "unreachable");
    return told;
  }
  let unreachable = list_filter_map_property(each, lambda3, "book_code");
  let refused = lists_combine([absent, unreachable]);
  let held = list_difference(book_codes, refused);
  let r = {
    bible_folder,
    held,
    absent,
    unreachable,
  };
  return r;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { g_sermon_edited_book_codes } from "./g_sermon_edited_book_codes.mjs";
import { ebible_book_code_to_chapter_codes } from "./ebible_book_code_to_chapter_codes.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export async function app_bible_sermons_chapters() {
  arguments_assert(arguments, 0);
  ("Every chapter whose sermon has been approved for the gospel game, which is every chapter this app offers a reader.");
  ("Approved means a whole book read over and edited by hand, and the list of those books is kept in one place, so this asks it rather than spelling Romans and James a second time. A book added there is offered here the same day.");
  ("The chapters of a book are read off the English bible's own index rather than counted here, so the order and the number are the bible's.");
  let bible_folder = ebible_folder_english();
  let book_codes = g_sermon_edited_book_codes();
  let chapter_codes = [];
  for (let book_code of book_codes) {
    let codes = await ebible_book_code_to_chapter_codes(
      bible_folder,
      book_code,
    );
    list_add_multiple(chapter_codes, codes);
  }
  return chapter_codes;
}

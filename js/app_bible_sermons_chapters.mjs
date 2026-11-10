import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { browser_is } from "./browser_is.mjs";
import { ebible_index_flat_chosen } from "./ebible_index_flat_chosen.mjs";
import { ebible_index_flat_storage } from "./ebible_index_flat_storage.mjs";
import { g_sermon_edited_book_codes } from "./g_sermon_edited_book_codes.mjs";
import { app_bible_sermons_written_book_codes } from "./app_bible_sermons_written_book_codes.mjs";
import { list_concat } from "./list_concat.mjs";
import { ebible_index_flat_book_chapter_codes } from "./ebible_index_flat_book_chapter_codes.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export async function app_bible_sermons_chapters() {
  arguments_assert(arguments, 0);
  ("Every chapter whose sermon has been approved for the gospel game, which is every chapter this app offers a reader.");
  ("Approved means a whole book read over and edited by hand, and the list of those books is kept in one place, so this asks it rather than spelling Romans and James a second time. A book added there is offered here the same day.");
  ("The books written verse by verse in the sermon loop are approved too, one line at a time as each was written, and are offered after them from their own list.");
  ("The chapters of a book are read off the English bible's own index rather than counted here, so the order and the number are the bible's.");
  ("The index is the published one the pickers read, because this runs in a reader's browser, and the road that reads a bible's chapters off its unpacked files exists only on a build machine - asked from a page it reaches for a file that was never saved there and takes the page down.");
  let bible_folder = ebible_folder_english();
  ("★ OFF A PAGE THE SAME PUBLISHED INDEX IS ASKED FOR STRAIGHT FROM STORAGE. The road a page takes builds the index on a build machine by reading the whole bible off its disk, which measured over ten minutes and was killed for memory before a facebook run posted anything - and this list was asked for more than once a run. The published file is that same list, uploaded from that same walk, in one download.");
  let list = null;
  if (browser_is()) {
    list = await ebible_index_flat_chosen([bible_folder]);
  } else {
    list = await ebible_index_flat_storage(bible_folder);
  }
  let a = g_sermon_edited_book_codes();
  let b = app_bible_sermons_written_book_codes();
  let book_codes = list_concat(a, b);
  let chapter_codes = [];
  for (let book_code of book_codes) {
    let codes = ebible_index_flat_book_chapter_codes(list, book_code);
    list_add_multiple(chapter_codes, codes);
  }
  return chapter_codes;
}

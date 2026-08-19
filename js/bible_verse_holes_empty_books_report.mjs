import { bible_verse_holes_empty_folders } from "./bible_verse_holes_empty_folders.mjs";
import { bible_verse_holes_probe_books } from "./bible_verse_holes_probe_books.mjs";
import { bible_verse_holes_bibles_at_once } from "./bible_verse_holes_bibles_at_once.mjs";
import { bible_folder_books_held } from "./bible_folder_books_held.mjs";
import { list_map_limited_async } from "./list_map_limited_async.mjs";
import { list_filter } from "./list_filter.mjs";
import { property_list_size } from "./property_list_size.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_size } from "./list_size.mjs";
export async function bible_verse_holes_empty_books_report() {
  "Asks every bible the record says is empty whether it holds anything at all, and sorts them into the two things they can turn out to be.";
  "THE GATE CAN SAY THESE BIBLES ARE EMPTY AND CANNOT SAY WHY, and the two reasons want opposite work from whoever fixes them. A folder that answers for no book anywhere is a name that is wrong or an upload that never happened, and the fix is in this repo. A folder that answers for other books and not the measured one is a real translation that genuinely does not include that book, and there is nothing to fix - what it needs is for the record to be allowed to say so.";
  "IT IS A SEPARATE COMMAND BECAUSE IT REACHES THE NETWORK, the same reason the measuring is. A gate has to be able to run without asking anybody's server for anything, so the gate refuses and this explains.";
  "FOUR DOWNLOADS PER BIBLE, a few bibles at a time, for the same reason the measuring is bounded - this asks the same server the same way, and the way to make a wide sweep lie is to send it all at once.";
  let folders = await bible_verse_holes_empty_folders();
  let book_codes = bible_verse_holes_probe_books();
  async function lambda(bible_folder) {
    let probed = await bible_folder_books_held(bible_folder, book_codes);
    return probed;
  }
  let at_once = bible_verse_holes_bibles_at_once();
  let each = await list_map_limited_async(folders, lambda, at_once);
  function lambda2(probed) {
    let count = property_list_size(probed, "held");
    let none = equal(count, 0);
    return none;
  }
  let nothing_anywhere = list_filter(each, lambda2);
  function lambda3(probed) {
    let count = property_list_size(probed, "held");
    let none = equal(count, 0);
    let some = not(none);
    return some;
  }
  let holds_other_books = list_filter(each, lambda3);
  let r = {
    asked: list_size(folders),
    books: book_codes,
    nothing_anywhere,
    holds_other_books,
  };
  return r;
}

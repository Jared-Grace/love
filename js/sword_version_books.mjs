import { property_in_list } from "./property_in_list.mjs";
import { sword_module_path } from "./sword_module_path.mjs";
import { sword_module_chapters } from "./sword_module_chapters.mjs";
import { sword_book_codes } from "./sword_book_codes.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { ebible_books_engbsb } from "./ebible_books_engbsb.mjs";
import { each } from "./each.mjs";
import { not } from "./not.mjs";
import { list_adder } from "./list_adder.mjs";
export async function sword_version_books(sword_folder) {
  "$plain sword_folder";
  "Every book a Sword-module bible carries, in the shape the rest of this repo already reads a book list in.";
  "The English names are this repo's own rather than the module's. A Sword module names its books by a scheme rather than in words - Gen, Phlm, 1Thess - and those are labels for a reader of the format, not words to show a person. The module is in English and its books are the sixty-six this repo already has English names for, so the names it already shows for every other English bible are the ones to show here.";
  "A book the module names but this repo has none of is passed over rather than refused, the same as when its chapters are read, so the two answers cannot disagree about which books this bible has.";
  "Where a book's first chapter is written is spelt the way eBible spells it, so whatever links to a book cannot tell the sources apart.";
  let module_folder = sword_module_path(sword_folder);
  let read = await sword_module_chapters(module_folder);
  let codes = sword_book_codes();
  function coded(entry) {
    let name = property_get(entry, "name");
    let book_code = codes[name];
    return book_code;
  }
  let carried = list_map(read, coded);
  function lambda(la) {
    let known = ebible_books_engbsb();
    each(known, book);
    function book(entry) {
      let held = property_in_list(entry, "book_code", carried);
      if (not(held)) {
        return;
      }
      la(entry);
    }
  }
  let books = list_adder(lambda);
  return books;
}

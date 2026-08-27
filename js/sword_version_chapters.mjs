import { sword_module_path } from "./sword_module_path.mjs";
import { sword_module_chapters } from "./sword_module_chapters.mjs";
import { sword_book_codes } from "./sword_book_codes.mjs";
import { each } from "./each.mjs";
import { property_get } from "./property_get.mjs";
import { undefined_is } from "./undefined_is.mjs";
import { ebible_chapter_code_pad } from "./ebible_chapter_code_pad.mjs";
import { list_adder } from "./list_adder.mjs";
export async function sword_version_chapters(sword_folder) {
  "$plain sword_folder";
  "Every chapter of a Sword-module bible with its verses, in the shape the rest of this repo already reads chapters in.";
  "The module says which book and which chapter each run of verses belongs to, so nothing here counts anything or lays two readings against each other. What comes back is what the module says it is.";
  "A book the module names but this repo has none of is passed over rather than refused. A module may carry books outside the sixty-six, and a chapter nothing here can link to is better left out than filed under a book code nobody answers to.";
  "AN EMPTY VERSE IS KEPT RATHER THAN DROPPED, because the module keeps a place for every verse the King James numbering has and leaves the place empty where this translation has no such verse. A verse's number is where it stands in the list, so dropping the empty ones would rename every verse after each of them.";
  let module_folder = sword_module_path(sword_folder);
  let books = await sword_module_chapters(module_folder);
  let codes = sword_book_codes();
  function lambda(la) {
    each(books, book);
    function book(entry) {
      let name = property_get(entry, "name");
      let book_code = codes[name];
      let unknown = undefined_is(book_code);
      if (unknown) {
        return;
      }
      let chapters = property_get(entry, "chapters");
      each(chapters, chapter);
      function chapter(one) {
        let number = property_get(one, "number");
        let verses = property_get(one, "verses");
        let chapter_code = ebible_chapter_code_pad(book_code, number);
        let v = {
          chapter_code,
          verses,
        };
        la(v);
      }
    }
  }
  let flat = list_adder(lambda);
  return flat;
}

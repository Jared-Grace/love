import { sword_module_path } from "./sword_module_path.mjs";
import { sword_module_chapters } from "./sword_module_chapters.mjs";
import { sword_book_codes } from "./sword_book_codes.mjs";
import { each } from "./each.mjs";
import { property_get } from "./property_get.mjs";
import { undefined_is } from "./undefined_is.mjs";
import { ebible_chapter_code_pad } from "./ebible_chapter_code_pad.mjs";
import { list_map_index_1 } from "./list_map_index_1.mjs";
import { list_filter } from "./list_filter.mjs";
import { ebible_verse_words_is } from "./ebible_verse_words_is.mjs";
import { text_from_number } from "./text_from_number.mjs";
import { ebible_verse_new_text } from "./ebible_verse_new_text.mjs";
import { list_adder } from "./list_adder.mjs";
export async function sword_version_chapters(sword_folder) {
  "$plain sword_folder";
  "Every chapter of a Sword-module bible with its verses, in the shape the rest of this repo already reads chapters in.";
  "The module says which book and which chapter each run of verses belongs to, so nothing here counts anything or lays two readings against each other. What comes back is what the module says it is.";
  "A book the module names but this repo has none of is passed over rather than refused. A module may carry books outside the sixty-six, and a chapter nothing here can link to is better left out than filed under a book code nobody answers to.";
  "A VERSE CARRIES ITS OWN NUMBER RATHER THAN STANDING WHERE ITS NUMBER SAYS. The module holds verses in a row and says nothing about them beyond their order, so the number has to be worked out from where each one stands - but it is written down beside the words rather than left implied, because that is how both of the other shelves hand a verse over and how storage keeps one. A list handed on with the number left implied reached the publishing road and was asked for a number it had no place to keep.";
  "THE NUMBER IS TAKEN BEFORE ANYTHING IS LEFT OUT, WHICH IS THE WHOLE REASON THE EMPTY ONES ARE READ AT ALL. The module keeps a place for every verse the King James numbering has and leaves the place empty where this translation has no such verse - sixteen of them. Once each verse holds its own number, an empty one has nothing left to say and is dropped here exactly as the other two shelves drop theirs; dropping it any earlier would have moved every later verse one number up.";
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
        let texts = property_get(one, "verses");
        let chapter_code = ebible_chapter_code_pad(book_code, number);
        let numbered = list_map_index_1(texts, verse_of);
        let verses = list_filter(numbered, ebible_verse_words_is);
        let v = {
          chapter_code,
          verses,
        };
        la(v);
      }
    }
  }
  function verse_of(text, place) {
    let verse_number = text_from_number(place);
    let verse = ebible_verse_new_text(text, verse_number);
    return verse;
  }
  let flat = list_adder(lambda);
  return flat;
}

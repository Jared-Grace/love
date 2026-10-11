import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_books_engbsb } from "./ebible_books_engbsb.mjs";
import { ebible_book_codes_old_testament } from "./ebible_book_codes_old_testament.mjs";
import { list_filter_includes_not } from "./list_filter_includes_not.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { text_index_of_last } from "./text_index_of_last.mjs";
import { text_take } from "./text_take.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_filter } from "./list_filter.mjs";
export function bible_references_old_testament(references) {
  "The references, written in English like Genesis 1:31, that point into the Old Testament - the rest left out.";
  "A reference is dropped only when its book is one of the New Testament's English names, rather than kept only when its book is one of the Old's. The authored lists do not always spell an Old Testament book the way the English bible does - Song of Solomon against Song - and asking the other way would silently lose those passages, while every New Testament name in them is spelled as the English bible spells it.";
  arguments_assert(arguments, 1);
  let books = ebible_books_engbsb();
  let codes_old = ebible_book_codes_old_testament();
  let books_new = list_filter_includes_not(books, "book_code", codes_old);
  let names_new = list_map_property(books_new, "text");
  function old_is(reference) {
    let space = text_index_of_last(reference, " ");
    let book_name = text_take(reference, space);
    let kept = list_includes_not(names_new, book_name);
    return kept;
  }
  let filtered = list_filter(references, old_is);
  return filtered;
}

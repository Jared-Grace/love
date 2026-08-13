import { app_shared_bible_reference_hash_key } from "./app_shared_bible_reference_hash_key.mjs";
import { app_shared_bible_reference_spaced } from "./app_shared_bible_reference_spaced.mjs";
import { app_shared_bible_ref_chapter_codes } from "./app_shared_bible_ref_chapter_codes.mjs";
import { ebible_book_code_apart_maximum } from "./ebible_book_code_apart_maximum.mjs";
import { ebible_book_word_apart } from "./ebible_book_word_apart.mjs";
import { items_nearest } from "./items_nearest.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_last } from "./list_last.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_remove_last } from "./list_remove_last.mjs";
import { list_join } from "./list_join.mjs";
import { text_digits_any_is } from "./text_digits_any_is.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { text_upper_to } from "./text_upper_to.mjs";
export function app_shared_bible_hash_field_reference(books_en) {
  "The reference field of a bible link - Jhon+3:16 - described in the shape the checking of links reads, built around the books the English bible turned out to have.";
  "It cannot be described before the page has fetched something, because whether a word is a book of the bible is a question about the book list, and the book list is fetched. That is why it is not among the fields checked before the page starts.";
  "A reference is one thing, not several, even though it is written as a book and a number with a space between them. A reader who wrote the book wrong is offered the whole reference back with the book fixed and their own chapter and verse still in it, in one press.";
  "What went wrong is nearly always the book name, so that is the only part a correction moves. The number after it is what the reader meant whatever they spelled the book as, and a page that offered to change it too would be guessing at the half that was never in doubt.";
  let key = app_shared_bible_reference_hash_key();
  function valid_is(value) {
    let ref_line = app_shared_bible_reference_spaced(value);
    let codes = app_shared_bible_ref_chapter_codes(ref_line, books_en);
    let readable = list_empty_not_is(codes);
    return readable;
  }
  function suggestions(value) {
    ("The last word is the chapter and verse and everything before it is the book, because a book may be several words long and a chapter and verse is never more than one. 1 Jhon 3:16 splits at the right place under that rule and would not under any rule that counted from the front.");
    let words = text_split_space(app_shared_bible_reference_spaced(value));
    let tail = list_last(words);
    let numbered = text_digits_any_is(tail);
    if (!numbered) {
      ("Nothing after the book says which chapter, so there is no reference here to repair - only a book name, and offering one back with a chapter invented for it would be answering a question the reader never asked.");
      let none = [];
      return none;
    }
    list_remove_last(words);
    let separator = " ";
    let attempt = list_join(words, separator);
    let word = text_upper_to(attempt);
    function apart_of(book) {
      let apart = ebible_book_word_apart(book, word);
      return apart;
    }
    let apart_maximum = ebible_book_code_apart_maximum();
    let nearest = items_nearest(books_en, apart_of, apart_maximum);
    let names = list_map_property(nearest, "text");
    let plus = "+";
    function offered_of(name) {
      let parts = [name, tail];
      let offered = list_join(parts, plus);
      return offered;
    }
    let offers = list_map(names, offered_of);
    return offers;
  }
  let field = {
    key,
    name: "reference",
    list_is: false,
    number_is: false,
    valid_is,
    suggestions,
    label: app_shared_bible_reference_spaced,
  };
  return field;
}

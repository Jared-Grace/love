import { app_shared_bible_book_hash_key } from "./app_shared_bible_book_hash_key.mjs";
import { ebible_book_code_known_is } from "./ebible_book_code_known_is.mjs";
import { ebible_book_code_label } from "./ebible_book_code_label.mjs";
import { ebible_book_code_suggestions } from "./ebible_book_code_suggestions.mjs";
export function app_shared_bible_hash_field_book() {
  "The book field of a bible link, described in the shape the checking of links reads.";
  "A link says the book on its own only before a chapter has been chosen, because once there is a chapter the chapter's own name carries the book inside it. So this is the field of the one moment the book and chapter pickers are on the screen - which is the moment somebody typing a link by hand is most likely to be in.";
  let field = {
    key: app_shared_bible_book_hash_key(),
    name: "book",
    list_is: false,
    valid_is: ebible_book_code_known_is,
    suggestions: ebible_book_code_suggestions,
    label: ebible_book_code_label,
  };
  return field;
}

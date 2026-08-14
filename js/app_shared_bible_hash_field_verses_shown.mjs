import { app_shared_bible_verses_shown_hash_key } from "./app_shared_bible_verses_shown_hash_key.mjs";
import { text_digits_is } from "./text_digits_is.mjs";
import { hash_number_suggestions } from "./hash_number_suggestions.mjs";
import { hash_number_label } from "./hash_number_label.mjs";
export function app_shared_bible_hash_field_verses_shown() {
  "The how-much-is-on-the-screen field of a bible link, described in the shape the checking of links reads.";
  "It holds a count, so the shape of a count is the whole of what is checked. The row of amounts a reader is offered is deliberately not what it is checked against: this word is written by the page itself as the length of what is showing plus one, which is almost never one of the offered numbers, and a link the page wrote would otherwise be called wrong by its own checking.";
  let field = {
    key: app_shared_bible_verses_shown_hash_key(),
    name: "verses shown",
    list_is: false,
    number_is: true,
    valid_is: text_digits_is,
    suggestions: hash_number_suggestions,
    label: hash_number_label,
  };
  return field;
}

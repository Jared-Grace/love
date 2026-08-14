import { app_shared_bible_verses_count_hash_key } from "./app_shared_bible_verses_count_hash_key.mjs";
import { text_digits_is } from "./text_digits_is.mjs";
import { hash_number_suggestions } from "./hash_number_suggestions.mjs";
import { hash_number_label } from "./hash_number_label.mjs";
export function app_shared_bible_hash_field_verses_count() {
  "The how-many-verses field of a bible link, described in the shape the checking of links reads.";
  "It holds a count rather than a word out of a written-down set, so the shape of a count is the whole of what is checked. How many is too many is a different question and is not asked here: a link asking for more verses than a page will draw is answered by drawing as many as it will, which is not a mistake anybody made.";
  "The row of amounts a reader is offered is deliberately not what this is checked against either, though no longer for the reason it was: pressing for another passage used to write its answer into this word, and wrote a number that is almost never one of the offered ones, so a link the page had written itself would have been called wrong by its own checking. That writing has its own word now. What is left is the plainer reason - somebody may type a number into an address bar by hand, and a number nobody was offered is not a number nobody meant.";
  let field = {
    key: app_shared_bible_verses_count_hash_key(),
    name: "verse count",
    list_is: false,
    number_is: true,
    valid_is: text_digits_is,
    suggestions: hash_number_suggestions,
    label: hash_number_label,
  };
  return field;
}

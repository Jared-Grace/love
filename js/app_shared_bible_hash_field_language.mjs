import { app_shared_bible_language_hash_key } from "./app_shared_bible_language_hash_key.mjs";
import { ebible_language_code_known_is } from "./ebible_language_code_known_is.mjs";
import { ebible_language_code_suggestions } from "./ebible_language_code_suggestions.mjs";
import { ebible_language_label } from "./ebible_language_label.mjs";
export function app_shared_bible_hash_field_language() {
  "The language field of a bible link, described in the one shape the checking of links reads: where it is written, whether it holds several, what counts as real, what to offer instead, and how to say one out loud.";
  "A field is data rather than code with a branch in it, so a page that wants a new one checked adds a description and nothing else. Everything drawing the screen already knows how to read this shape.";
  let field = {
    key: app_shared_bible_language_hash_key(),
    name: "language",
    list_is: true,
    number_is: false,
    valid_is: ebible_language_code_known_is,
    suggestions: ebible_language_code_suggestions,
    label: ebible_language_label,
  };
  return field;
}

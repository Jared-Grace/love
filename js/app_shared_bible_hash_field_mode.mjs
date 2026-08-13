import { app_shared_bible_mode_hash_key } from "./app_shared_bible_mode_hash_key.mjs";
import { app_shared_bible_mode_known_is } from "./app_shared_bible_mode_known_is.mjs";
import { app_shared_bible_mode_label } from "./app_shared_bible_mode_label.mjs";
import { app_shared_bible_mode_suggestions } from "./app_shared_bible_mode_suggestions.mjs";
export function app_shared_bible_hash_field_mode() {
  "The way-of-reading field of a bible link, described in the shape the checking of links reads.";
  "This one never failed loudly, which is why it is here. A word naming neither reader simply matched neither and the page opened the other one, so a link asking for a single verse quietly gave somebody a whole chapter and nothing said a word about it. A wrong answer given confidently is worse than a stopped page, not better.";
  let field = {
    key: app_shared_bible_mode_hash_key(),
    name: "way of reading",
    list_is: false,
    number_is: false,
    valid_is: app_shared_bible_mode_known_is,
    suggestions: app_shared_bible_mode_suggestions,
    label: app_shared_bible_mode_label,
  };
  return field;
}

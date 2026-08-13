import { app_shared_bible_chapter_hash_key } from "./app_shared_bible_chapter_hash_key.mjs";
import { ebible_chapter_code_known_is } from "./ebible_chapter_code_known_is.mjs";
import { ebible_chapter_code_label } from "./ebible_chapter_code_label.mjs";
import { ebible_chapter_code_suggestions } from "./ebible_chapter_code_suggestions.mjs";
export function app_shared_bible_hash_field_chapter() {
  "The chapter field of a bible link, described in the shape the checking of links reads.";
  "It holds one chapter and not a list of them, which is the whole difference from the language beside it - and it is a difference of one word here rather than of a second copy of everything downstream.";
  let field = {
    key: app_shared_bible_chapter_hash_key(),
    name: "chapter",
    list_is: false,
    valid_is: ebible_chapter_code_known_is,
    suggestions: ebible_chapter_code_suggestions,
    label: ebible_chapter_code_label,
  };
  return field;
}

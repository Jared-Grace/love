import { app_supper_folders_hash_key } from "./app_supper_folders_hash_key.mjs";
import { ebible_bible_folder_known_is } from "./ebible_bible_folder_known_is.mjs";
import { ebible_bible_folder_suggestions } from "./ebible_bible_folder_suggestions.mjs";
import { ebible_bible_folder_label } from "./ebible_bible_folder_label.mjs";
export function app_supper_hash_field_bible_folders() {
  "The bible-versions field of a supper link, described in the one shape the checking of links reads: where it is written, whether it holds several, what counts as real, what to offer instead, and how to say one out loud.";
  "The versions are named by folder here rather than by language code, because that is what the link is actually spelled with - a reader who mistyped one has mistyped a folder, and offering them language codes would be answering a question they did not ask.";
  let field = {
    key: app_supper_folders_hash_key(),
    name: "bible version",
    list_is: true,
    valid_is: ebible_bible_folder_known_is,
    suggestions: ebible_bible_folder_suggestions,
    label: ebible_bible_folder_label,
  };
  return field;
}

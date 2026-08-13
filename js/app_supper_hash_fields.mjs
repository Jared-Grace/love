import { app_supper_hash_field_passage } from "./app_supper_hash_field_passage.mjs";
import { app_supper_hash_field_bible_folders } from "./app_supper_hash_field_bible_folders.mjs";
export function app_supper_hash_fields() {
  "Every part of a supper link that can be checked before anything is fetched, and so every part a wrong link can be caught by.";
  "The list is here rather than at each page, so the two supper surfaces cannot end up disagreeing about what makes a link wrong. A field added here is checked by both of them at once.";
  "Which passage the link opens on is checked for its shape only. A number that is out of range is not misspelled - there is no near one to offer, and how many passages there are is not known until they are loaded - so a count too far is left to the page. A word where a count should stand is a different thing, and that is caught here.";
  let bible_folders = app_supper_hash_field_bible_folders();
  let passage = app_supper_hash_field_passage();
  let fields = [bible_folders, passage];
  return fields;
}

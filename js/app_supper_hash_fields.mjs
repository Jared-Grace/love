import { app_supper_hash_field_bible_folders } from "./app_supper_hash_field_bible_folders.mjs";
export function app_supper_hash_fields() {
  "Every part of a supper link that can be checked before anything is fetched, and so every part a wrong link can be caught by.";
  "The list is here rather than at each page, so the two supper surfaces cannot end up disagreeing about what makes a link wrong. A field added here is checked by both of them at once.";
  "Which passage the link opens on is deliberately not here. It is written as a number, and a number that is out of range is not misspelled - there is no near one to offer, so the only honest answer would be to leave it out, and a page saying that about a number is telling a reader off rather than helping them.";
  let bible_folders = app_supper_hash_field_bible_folders();
  let fields = [bible_folders];
  return fields;
}

import { findings_folder } from "./findings_folder.mjs";
import { path_join } from "./path_join.mjs";
export function bible_storage_books_path() {
  "Where the record of which books storage actually holds for each bible is kept.";
  "One place, named once, so the command that writes it and the gate that reads it cannot drift apart by one of them being edited.";
  "It is kept apart from the record of missing verses because the two answer different questions and cost different things to ask. What a bible holds is read off a folder's names in one request; which verses it can answer with is read by downloading a book of it. Putting them in one file would make the cheap question wait on the dear one every time either changed.";
  let folder = findings_folder();
  let path = path_join([folder, "bible_storage_books.json"]);
  return path;
}

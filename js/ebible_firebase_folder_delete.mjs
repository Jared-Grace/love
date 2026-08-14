import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_firebase_folder_path } from "./ebible_firebase_folder_path.mjs";
import { firebase_storage_prefix_delete } from "./firebase_storage_prefix_delete.mjs";
import { text_combine } from "./text_combine.mjs";
export async function ebible_firebase_folder_delete(bible_folder) {
  "Unpublish one bible: remove every file of it that storage is holding.";
  "$plain bible_folder";
  "Dropping a bible from the list of the ones offered stops it being shown and does nothing at all to the copy already published, which stays where anyone who knows its address can still fetch it. So a text taken away for a reason that matters - terms that were never granted to us - needs this second step, and the two are worth keeping apart in the mind: what is offered and what is published are different questions with different answers.";
  "It works out where the files are from the same naming an upload used, so the two cannot come to disagree about where one bible's files live.";
  arguments_assert(arguments, 1);
  let folder = ebible_firebase_folder_path(bible_folder);
  let prefix = text_combine(folder, "/");
  let r = await firebase_storage_prefix_delete(prefix);
  return r;
}

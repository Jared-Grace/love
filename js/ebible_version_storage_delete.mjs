import { ebible_bible_folder_commercial_not_assert } from "./ebible_bible_folder_commercial_not_assert.mjs";
import { ebible_firebase_folder_path } from "./ebible_firebase_folder_path.mjs";
import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
import { firebase_storage_prefix_delete } from "./firebase_storage_prefix_delete.mjs";
export async function ebible_version_storage_delete(bible_folder) {
  "$plain bible_folder";
  "Takes one translation's published text down from storage, every file of it, and afterwards asks storage what is left.";
  "It refuses a translation the repo is free to ship before it removes anything. A remover names a folder and the folder name says nothing about whose text it is, so the terms are what decides, read the same way the publishing doors read them.";
  "The removing itself is the repo's one remover of a whole storage folder rather than a second one written here. That one reads the list first, holds every name in it against the folder that was asked for, and stops before touching a file if a single name falls outside - so a slip in the folder name costs nothing. Writing that check again beside it would have been a copy that can drift, and a translation is exactly the wrong thing to be removing under a folder name nobody checked.";
  "The folder is named with its closing slash, put there by joining an empty word on the end. Storage matches opening letters rather than folders, so a folder written without its slash also matches a neighbour whose name merely begins the same way.";
  await ebible_bible_folder_commercial_not_assert(bible_folder);
  let folder = ebible_firebase_folder_path(bible_folder);
  let prefix = list_join_slash_forward([folder, ""]);
  let r = await firebase_storage_prefix_delete(prefix);
  return r;
}

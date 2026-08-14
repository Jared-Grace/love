import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_bucket_file_get } from "./firebase_bucket_file_get.mjs";
import { property_get } from "./property_get.mjs";
export async function firebase_storage_delete(destination) {
  "Remove one named file from storage.";
  "$plain destination";
  "It names one whole file and never a folder and never a pattern, so the most it can ever do is the one thing it was told. Removing a folder is built on top of this by naming each of its files in turn, which means the sweep can be checked name by name before any of it happens - a folder-shaped remove has nothing to check.";
  "The same reading of a name that an upload uses, so a file put there under one spelling is found again under that spelling and not a second one.";
  arguments_assert(arguments, 1);
  let r = await firebase_bucket_file_get(destination);
  let file = property_get(r, "file");
  await file.delete();
}

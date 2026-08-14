import { arguments_assert } from "./arguments_assert.mjs";
import { assert_json } from "./assert_json.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { firebase_bucket } from "./firebase_bucket.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function firebase_storage_prefix_names(prefix) {
  "Every file name storage is holding under one folder.";
  "$plain prefix";
  "The folder must be written with its closing slash, and this refuses one written without. Storage has no folders of its own - it matches the opening letters of a name - so a folder written without its slash also matches every name that merely BEGINS with those letters, and a neighbouring folder whose name starts the same way is swept in silently. Making the slash a requirement rather than something quietly added means the caller has said which of the two it meant.";
  "Asking is free of consequence, which is why it is its own function: the same list is what a delete must be checked against, and a check that shares no code with the thing it checks is worth more than one that does.";
  arguments_assert(arguments, 1);
  let closed = text_ends_with(prefix, "/");
  assert_json(closed, {
    prefix,
    hint: "a storage folder is named with its closing slash, so that it cannot also match a neighbour whose name merely starts the same way",
  });
  let bucket = await firebase_bucket();
  let [files] = await bucket.getFiles({
    prefix,
  });
  let names = list_map_property(files, "name");
  return names;
}

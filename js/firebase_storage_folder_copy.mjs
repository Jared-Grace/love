import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { assert_json } from "./assert_json.mjs";
import { firebase_storage_prefix_names } from "./firebase_storage_prefix_names.mjs";
import { firebase_bucket } from "./firebase_bucket.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
export async function firebase_storage_folder_copy(prefix_from, prefix_to) {
  "Copies every file storage holds under one folder to the same names under another, keeping each file's metadata, and leaves the originals where they were.";
  "$plain prefix_from";
  "$plain prefix_to";
  ("Both folders are written with their closing slash, for the reason ",
    fn_name("firebase_storage_prefix_names"),
    " gives. Nothing is deleted: a copy that went wrong can be copied again, a delete cannot be undone.");
  arguments_assert(arguments, 2);
  let closed = text_ends_with(prefix_to, "/");
  assert_json(closed, {
    prefix_to,
  });
  let names = await firebase_storage_prefix_names(prefix_from);
  let bucket = await firebase_bucket();
  let copied = [];
  for (let name of names) {
    let inside = text_starts_with(name, prefix_from);
    assert_json(inside, {
      name,
      prefix_from,
    });
    let rest = name.slice(prefix_from.length);
    let destination = prefix_to + rest;
    let v = bucket.file(destination);
    await bucket.file(name).copy(v);
    copied.push(destination);
  }
  return copied;
}

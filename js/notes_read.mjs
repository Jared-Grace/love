import { arguments_assert } from "./arguments_assert.mjs";
import { notes_path } from "./notes_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
export async function notes_read(store, key) {
  "$plain store";
  "$plain key";
  "Every note standing against one thing in one store, in the order they were made.";
  "NOTHING NOTED YET IS AN EMPTY LIST AND NOT A FAILURE. Almost everything reviewed is found to be right, so having no file is the ordinary case rather than the broken one, and asking about a thing nobody has complained about must cost the same as asking about one somebody has.";
  arguments_assert(arguments, 2);
  let path = notes_path(store, key);
  let exists = await file_exists(path);
  let none = not(exists);
  if (none) {
    let empty = [];
    return empty;
  }
  let held = await file_read_json(path);
  let notes = property_get(held, "notes");
  return notes;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_note_path } from "./song_image_note_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
export async function song_image_notes(key) {
  "Every note standing against one couplet's drawing, in the order they were made.";
  "NOTHING NOTED YET IS AN EMPTY LIST AND NOT A FAILURE. A picture nobody has looked at yet stands against nothing, which is the ordinary case for one drawn an hour ago rather than the broken one.";
  arguments_assert(arguments, 1);
  let path = song_image_note_path(key);
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

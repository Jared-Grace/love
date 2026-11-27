import { arguments_assert } from "./arguments_assert.mjs";
import { text_frozen } from "./text_frozen.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function photo_organizer_storage_path(kind, name) {
  "$plain kind";
  "$plain name";
  "Where one thing of the photo organizer is kept online: kind is the folder of storage it sits in, folders or photos, and name is its own file name there.";
  "Every address starts with the organizer's own top folder, which the permission rules let anybody read and only the owner write; once sent, those addresses are handed out, so the top folder's name never changes.";
  arguments_assert(arguments, 2);
  let top = text_frozen("photo_organizer");
  let path = text_combine_multiple([top, "/", kind, "/", name]);
  return path;
}

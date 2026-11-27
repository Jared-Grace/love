import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
import { photo_organizer_storage_path } from "./photo_organizer_storage_path.mjs";
export function photo_organizer_folder_path(key) {
  "$plain key";
  "Where one folder of the photo organizer is kept online: a file of its own, named by its key, holding its name, the folder it sits inside, and the names of its photos.";
  arguments_assert(arguments, 1);
  let name = text_combine(key, ".json");
  let path = photo_organizer_storage_path("folders", name);
  return path;
}

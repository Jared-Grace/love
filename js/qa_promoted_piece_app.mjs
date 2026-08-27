import { arguments_assert } from "./arguments_assert.mjs";
import { path_base } from "./path_base.mjs";
import { qa_promoted } from "./qa_promoted.mjs";
import { properties_get } from "./properties_get.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
export async function qa_promoted_piece_app(file_path) {
  "$plain file_path";
  "Which app's note vouches for the piece a path names - that app's name, or nothing when no note speaks for it";
  "A note is what turns pieces sitting in a folder into pieces somebody judged. A piece it speaks for cannot be changed without the note becoming an account of something that is gone, so before anything writes there it is worth knowing whose account is about to be made wrong.";
  "Asked by the name of the file alone, because that is the name a note keeps its pieces under, and which folder the file is in has already been settled by whoever asks this.";
  arguments_assert(arguments, 1);
  let file_name = path_base(file_path);
  let promoted = await qa_promoted();
  let app_names = properties_get(promoted);
  for (let app_name of app_names) {
    let note = property_get(promoted, app_name);
    let hashes = property_get(note, "hashes");
    let hash = property_get_or_null(hashes, file_name);
    let vouched = null_not_is(hash);
    if (vouched) {
      return app_name;
    }
  }
  return null;
}

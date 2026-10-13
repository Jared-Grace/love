import { arguments_assert } from "./arguments_assert.mjs";
import { file_name_bare_assert } from "./file_name_bare_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { path_join } from "./path_join.mjs";
import { lyric_video_pictures_folder } from "./lyric_video_pictures_folder.mjs";
import { file_move } from "./file_move.mjs";
export async function lyric_video_pictures_old_keep(
  document_name,
  picture_names,
) {
  "$plain document_name";
  "$plain picture_names";
  "Sets pictures aside before they are drawn again: each named picture in one document's folder is renamed with old_ in front, so the next drawing pass sees nothing at its path and draws it fresh, and the previous drawing stays beside it to compare. Picture names are comma-joined, without the .png.";
  "WHY IT EXISTS: the same thing done by hand is a move, and a move can put any file anywhere, so it asks the human every time. Here nothing handed in is a path - the document and the pictures are bare names, refused otherwise, and the folder is fixed - so this can hold a standing approval.";
  "IT NEVER DRAWS OVER ANYTHING: the move refuses when the old_ name is already taken, so a second redo of the same picture stops and says so rather than losing the first old drawing. Every name is checked before any is moved, so a bad name moves nothing.";
  arguments_assert(arguments, 2);
  file_name_bare_assert(document_name);
  let names = text_split_comma(picture_names);
  for (let name of names) {
    file_name_bare_assert(name);
  }
  let r2 = lyric_video_pictures_folder();
  let folder = path_join([r2, document_name]);
  let moved = [];
  for (let name of names) {
    let from = path_join([folder, name + ".png"]);
    let to = path_join([folder, "old_" + name + ".png"]);
    await file_move(from, to);
    moved.push(to);
  }
  let r = {
    folder,
    moved,
  };
  return r;
}

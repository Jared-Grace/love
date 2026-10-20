import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { lyric_video_document_pictures } from "./lyric_video_document_pictures.mjs";
import { lyric_video_pictures_folder } from "./lyric_video_pictures_folder.mjs";
import { folder_read_recursive_paths_async } from "./folder_read_recursive_paths_async.mjs";
import { path_base } from "./path_base.mjs";
import { equal } from "./equal.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_parent_exists_ensure } from "./file_parent_exists_ensure.mjs";
import { file_copy } from "./file_copy.mjs";
export async function lyric_video_document_pictures_missing_copy(
  path_document,
) {
  arguments_assert(arguments, 1);
  ("$plain path_document");
  ("Gives a lyric video document's own folder every picture file it names but does not have, taking each one from whichever other song already holds a file of that name.");
  ("★ A CROP IS FOUND BY ITS NAME ACROSS EVERY SONG'S FOLDER, BECAUSE THE SAME PAINTING IS CHOSEN FOR MANY PSALMS. The crop is already cut to the shape of the screen and already looked over for what may not be shown, so copying it in is the whole of the work. A name no folder holds is reported rather than guessed at, because only a person may choose a painting.");
  ("★ NOTHING ALREADY SITTING AT A NAMED PATH IS TOUCHED. A file there is the authored one, and a copy over it would throw away a crop cut for this song in favour of a namesake cut for another.");
  let document = await file_read_json(path_document);
  let pictures = lyric_video_document_pictures(document);
  let folder = lyric_video_pictures_folder();
  let paths = await folder_read_recursive_paths_async(folder);
  let sources = {};
  for (let path of paths) {
    let base = path_base(path);
    let known = sources[base];
    if (equal(known, undefined)) {
      sources[base] = path;
    }
  }
  let copied = [];
  let held = [];
  let missing = [];
  for (let picture of pictures) {
    let path_picture = picture.path;
    let there = await file_exists(path_picture);
    if (there) {
      held.push(picture.name);
      continue;
    }
    let base = path_base(path_picture);
    let source = sources[base];
    if (equal(source, undefined)) {
      missing.push(picture.name);
      continue;
    }
    await file_parent_exists_ensure(path_picture);
    await file_copy(source, path_picture);
    copied.push(picture.name);
  }
  let r = {
    copied,
    held,
    missing,
  };
  return r;
}

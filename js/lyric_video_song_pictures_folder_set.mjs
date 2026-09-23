import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { path_join } from "./path_join.mjs";
import { lyric_video_songs_folder } from "./lyric_video_songs_folder.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { path_basename } from "./path_basename.mjs";
import { file_exists } from "./file_exists.mjs";
import { list_add } from "./list_add.mjs";
import { file_json_transform } from "./file_json_transform.mjs";
export async function lyric_video_song_pictures_folder_set(name, folder) {
  "$plain name";
  "$plain folder";
  "Points every picture of a song's document at the file of the same name in the given folder, for each picture that folder has a file for.";
  "IT IS THE STEP AFTER THE CHOOSING. The settled folder holds one picture per place, named after the picture it stands in for, so the document needs only its paths moved to put what was chosen into the video.";
  "A PICTURE THE FOLDER HAS NO FILE FOR KEEPS ITS PATH, for the same reason the settling leaves it out: nothing was chosen for it, and a path to a missing file renders as a failed video rather than as the picture it was.";
  "★ A MOVED PICTURE LOSES ITS LIGHT NUMBERS. Those were written against the old file, and the new one was chosen by looking at it as it is, with no such numbers laid over it - so keeping them would render a picture nobody chose. What was dropped is handed back, so it can be written again if it is still wanted.";
  arguments_assert(arguments, 2);
  let folder2 = lyric_video_songs_folder();
  let path_document = path_join([folder2, name + ".json"]);
  let document = await file_read_json(path_document);
  let moves = {};
  for (let picture of document.pictures) {
    let file_name = await path_basename(picture.path);
    let path = path_join([folder, file_name]);
    if (await file_exists(path)) {
      moves[picture.path] = path;
    }
  }
  let moved = [];
  function point(data) {
    for (let picture of data.pictures) {
      let path = moves[picture.path];
      if (equal(path, undefined)) {
        continue;
      }
      let dropped = {};
      for (let light of ["brightness", "contrast", "gamma"]) {
        if (light in picture) {
          dropped[light] = picture[light];
          delete picture[light];
        }
      }
      list_add(moved, {
        name: picture.name,
        path,
        dropped,
      });
      picture.path = path;
    }
  }
  await file_json_transform(path_document, point);
  return moved;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { file_name_json } from "./file_name_json.mjs";
import { storage_function_path } from "./storage_function_path.mjs";
export function lyric_video_picture_note_path(key) {
  "$plain key";
  "Where the notes standing against one background picture of a lyric video are kept - what is wrong with the picture, said without saying what to draw instead.";
  "ONE FILE PER PICTURE rather than one file for the song, so two people watching two psalms at once cannot overwrite each other, and so a picture that gets redrawn carries its own account of why with it.";
  "IT IS THE SAME SHAPE AS THE STORE THE SONG PICTURES ARE REVIEWED THROUGH, deliberately, and the two are not yet one. Collapsing them means editing the song files, and those are being worked on; a second copy that says so is cheaper today than a collision. Whoever finds both cold should make one store and give it the key rather than the subject.";
  arguments_assert(arguments, 1);
  let f_name = fn_name("lyric_video_picture_note_add");
  let named = String(key);
  let file_name = file_name_json(named);
  let path = storage_function_path(f_name, file_name);
  return path;
}

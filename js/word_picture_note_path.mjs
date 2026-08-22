import { word_picture_folder } from "./word_picture_folder.mjs";
import { path_join } from "./path_join.mjs";
export function word_picture_note_path(word, attempt) {
  "$plain word";
  "Where the note saying what produced one attempt at a taught word's picture is saved.";
  "IT SITS BESIDE THE PICTURE UNDER THE SAME NUMBER, so a picture is never separated from the wording that made it. Looking at three attempts together only settles a wording if you can still tell which wording each one came from, and a wording kept anywhere else is a wording that goes missing the moment the folder is copied.";
  let folder = word_picture_folder(word);
  let name = String(attempt) + ".json";
  let path = path_join([folder, name]);
  return path;
}

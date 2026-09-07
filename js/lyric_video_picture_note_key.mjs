import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_split } from "./text_split.mjs";
import { list_last_remaining } from "./list_last_remaining.mjs";
import { path_name } from "./path_name.mjs";
import { list_add } from "./list_add.mjs";
import { list_join } from "./list_join.mjs";
export function lyric_video_picture_note_key(picture) {
  "$plain picture";
  "The name the notes against one background picture of a lyric video are filed under, made out of the picture's own place on the disk.";
  "IT IS THE PICTURE'S PATH AND NOT ITS NUMBER. A watcher says the picture behind these words is wrong, and the picture they mean is the file that was drawn, not the third entry of one version of one document. Filed by number, inserting a picture earlier in the song would silently repoint every note filed after it onto the wrong drawing, and nothing would go red.";
  "IT IS THE WHOLE PATH AND NOT ONLY THE LAST PART OF IT. Two psalms drawing the same verse imagery will land on the same picture name - a night sky opening is what the first line of a great many of them says - so a key made of the file name alone would file one psalm's complaint against another psalm's drawing. Every picture of one song sits in a folder named after that song, so carrying the folders is what keeps the two apart.";
  "THE SEPARATOR IS A DOT BECAUSE THE STORE WANTS A FLAT FILE NAME. The notes are kept one file per picture in a folder, so a key holding a slash would name a folder that is not there rather than a file. The dot is free to use because the only dot in one of these paths is the one in front of the extension, and that is taken off here.";
  arguments_assert(arguments, 1);
  let path = property_get(picture, "path");
  let parts = text_split(path, "/");
  let split = list_last_remaining(parts);
  let last = property_get(split, "last");
  let above = property_get(split, "remaining");
  let stem = path_name(last);
  list_add(above, stem);
  let key = list_join(above, ".");
  return key;
}

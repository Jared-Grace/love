import { file_path_temp_marker } from "./file_path_temp_marker.mjs";
import { random } from "./random.mjs";
export function file_path_temp(file_path) {
  "the marker comes from its own getter because something else has to recognise what this makes: a copier walking the folder must be able to tell a write in progress from a file, and it can only do that if both halves read the same word";
  let marker = file_path_temp_marker();
  let suffix = random();
  let temp_path = `${file_path}${marker}${process.pid}.${suffix}`;
  return temp_path;
}

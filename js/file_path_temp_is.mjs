import { file_path_temp_marker } from "./file_path_temp_marker.mjs";
import { text_includes } from "./text_includes.mjs";
export function file_path_temp_is(file_path) {
  "whether this path is a file part way through being written rather than a file.";
  "every write here lands beside its destination under a name carrying the marker and is then moved onto it, so a path wearing the marker exists only for the moment of one write and is gone by the time anybody asks about it again.";
  "reading it is therefore always wrong, and so is copying it: whoever reaches it either finds a fragment or finds nothing at all, and finding nothing throws.";
  let marker = file_path_temp_marker();
  let temp = text_includes(file_path, marker);
  return temp;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { path_extension } from "./path_extension.mjs";
import { path_extension_replace } from "./path_extension_replace.mjs";
export function lyric_video_picture_alternative_path(path) {
  "$plain path";
  "Where the second drawing of a picture goes - the one that draws nobody - named after the first so the pair is obvious in a folder listing.";
  "★ IT IS DERIVED AND NEVER AUTHORED, BECAUSE A SECOND PLACE TO WRITE IT IS A SECOND PLACE TO FORGET IT. The document already says where the picture goes. A field beside it saying where the other one goes would be a fact the author has to keep true by hand, and the day it is wrong the alternative is drawn over the original or lost in a folder nobody looks in. One authored wording, one derived place.";
  "THE ENDING IS PUT BEFORE THE FILE'S OWN ENDING RATHER THAN AFTER IT, so the file is still a picture to everything that reads it by name.";
  arguments_assert(arguments, 1);
  let extension = path_extension(path);
  let ending = "_no_people" + extension;
  let r = path_extension_replace(path, ending);
  return r;
}

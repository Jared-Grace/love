import { path_join } from "./path_join.mjs";
import { song_image_drawn_folder } from "./song_image_drawn_folder.mjs";
export function song_image_drawn_path(number, attempt) {
  "where one attempt at a couplet's picture is saved";
  "the attempt is named by a plain number so that the order they were drawn in is the order they sort in, and so that the next one to write is worked out by counting rather than by keeping a tally anywhere";
  let folder = song_image_drawn_folder(number);
  let name = String(attempt) + ".png";
  let path = path_join([folder, name]);
  return path;
}

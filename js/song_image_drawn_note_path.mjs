import { path_join } from "./path_join.mjs";
import { song_image_drawn_folder } from "./song_image_drawn_folder.mjs";
export function song_image_drawn_note_path(number, attempt) {
  "where the record of what produced one attempt is saved, beside the attempt itself and under the same number";
  "the picture on its own is half a record. Every one of these attempts differs from the last by a few words, and looking at two of them side by side answers which is better without ever answering why - so the wording that made each one is written down next to it, and the comparison becomes a reason rather than a preference.";
  let folder = song_image_drawn_folder(number);
  let name = String(attempt) + ".json";
  let path = path_join([folder, name]);
  return path;
}

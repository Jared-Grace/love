import { less_than_equal } from "./less_than_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { jpeg_exif_orientation } from "./jpeg_exif_orientation.mjs";
import { image_file_rotate_quarter_browser } from "./image_file_rotate_quarter_browser.mjs";
export async function image_file_upright_browser(file) {
  "$plain file";
  "The same picture file with its pixels turned the way its camera note asks and the note gone, so it shows upright everywhere - also on a site that ignores the note, where a phone photo would otherwise go up sideways (human, 2026-11-28). A file asking for no turn comes back as it was, never saved again.";
  "Drawn again with no turn added, since the browser already reads a picture the way its note says to hold it; the drawing keeps no note.";
  arguments_assert(arguments, 1);
  let v = await file.arrayBuffer();
  let bytes = new Uint8Array(v);
  let turn = jpeg_exif_orientation(bytes);
  if (less_than_equal(turn, 1)) {
    return file;
  }
  let upright = await image_file_rotate_quarter_browser(file, 0);
  return upright;
}

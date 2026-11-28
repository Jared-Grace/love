import sharp from "sharp";
import { less_than_equal } from "./less_than_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { jpeg_exif_orientation } from "./jpeg_exif_orientation.mjs";
export async function jpeg_buffer_upright(buffer) {
  "$plain buffer";
  "The same JPEG with its pixels turned the way its camera note asks and the note gone, so a site that ignores the note still shows it upright (human, 2026-11-28: photos sent to a claims site went up sideways). A file with no turn asked for comes back byte for byte, never saved again.";
  arguments_assert(arguments, 1);
  let turn = jpeg_exif_orientation(buffer);
  if (less_than_equal(turn, 1)) {
    return buffer;
  }
  let upright = await sharp(buffer)
    .rotate()
    .jpeg({
      quality: 92,
    })
    .toBuffer();
  return upright;
}

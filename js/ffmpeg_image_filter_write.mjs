import { ffmpeg_words_run } from "./ffmpeg_words_run.mjs";
import { image_content_credentials_copy } from "./image_content_credentials_copy.mjs";
export async function ffmpeg_image_filter_write(path_from, filters, path_to) {
  "$plain path_from";
  "$plain filters";
  "$plain path_to";
  "read a picture, run the given ffmpeg picture filters over it, and save the result as a new picture";
  "THE FILTERS ARE HANDED IN AND NEVER DECIDED HERE, because a lighter picture and a lighter, more colourful one are different decisions carried out the same way; spelling either here would force the other to copy the carrying-out";
  "it writes somewhere new rather than over the picture it read, says yes in advance to overwriting, and says one frame, for the same reasons the palette writer gives";
  "IT CARRIES THE CONTENT CREDENTIALS OVER, because ffmpeg keeps no chunk it has no use for and the terms these pictures are drawn under forbid dropping them";
  let command_words = [
    "-hide_banner",
    "-loglevel",
    "error",
    "-y",
    "-i",
    path_from,
    "-vf",
    filters,
    "-frames:v",
    "1",
    "-update",
    "1",
    path_to,
  ];
  let ran = await ffmpeg_words_run(command_words);
  await image_content_credentials_copy(path_from, path_to);
  return ran;
}

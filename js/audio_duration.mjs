import { text_slice } from "./text_slice.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_find_starts_with } from "./list_find_starts_with.mjs";
import { text_size } from "./text_size.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { property_get } from "./property_get.mjs";
import { command_line } from "./command_line.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { multiply } from "./multiply.mjs";
export async function audio_duration(joined_audio) {
  let result = null;
  try {
    let stdout = await command_line(text_combine("ffmpeg -i ", joined_audio));
  } catch (e) {
    let stderr = property_get(e, "stderr");
    let lines = text_split_newline(stderr);
    let prefix = "  Duration: ";
    let size = text_size(prefix);
    let found = list_find_starts_with(lines, prefix);
    let index = list_index_of(found, ",");
    let d = text_slice(found, size, index);
    result = duration_to_seconds(d);
  }
  function duration_to_seconds(duration_str) {
    let [h, m, s] = duration_str.split(":");
    let v = text_combine_multiple([
      multiply(parseInt(h), 3600),
      multiply(parseInt(m), 60),
      parseFloat(s),
    ]);
    return v;
  }
  return result;
}

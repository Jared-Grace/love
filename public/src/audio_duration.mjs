import { text_slice } from "../../../love/public/src/text_slice.mjs";
import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
import { list_find_starts_with } from "../../../love/public/src/list_find_starts_with.mjs";
import { text_size } from "../../../love/public/src/text_size.mjs";
import { text_split_newline } from "../../../love/public/src/text_split_newline.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { command_line } from "../../../love/public/src/command_line.mjs";
export async function audio_duration(joined_audio) {
  let result = null;
  try {
    let stdout = await command_line("ffmpeg -i " + joined_audio);
  } catch (e) {
    let stderr = object_property_get(e, "stderr");
    let lines = text_split_newline(stderr);
    const prefix = "  Duration: ";
    let size = text_size(prefix);
    let found = list_find_starts_with(lines, prefix);
    let index = list_index_of(found, ",");
    let d = text_slice(found, size, index);
    result = duration_to_seconds(d);
  }
  function duration_to_seconds(duration_str) {
    let [h, m, s] = duration_str.split(":");
    let v = parseInt(h) * 3600 + parseInt(m) * 60 + parseFloat(s);
    return v;
  }
  return result;
}

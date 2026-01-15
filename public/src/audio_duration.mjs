import { string_slice } from "../../../love/public/src/string_slice.mjs";
import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
import { list_find_starts_with } from "../../../love/public/src/list_find_starts_with.mjs";
import { string_size } from "../../../love/public/src/string_size.mjs";
import { string_split_newline } from "../../../love/public/src/string_split_newline.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { command_line } from "../../../love/public/src/command_line.mjs";
export async function audio_duration(joined_audio) {
  let result = null;
  try {
    let stdout = await command_line("ffmpeg -i " + joined_audio);
  } catch (e) {
    let stderr = object_property_get(e, "stderr");
    let lines = string_split_newline(stderr);
    const prefix = "  Duration: ";
    let size = string_size(prefix);
    let found = list_find_starts_with(lines, prefix);
    let index = list_index_of(found, ",");
    result = string_slice(found, size, index);
  }
  return result;
}

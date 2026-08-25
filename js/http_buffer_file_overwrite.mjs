import { http_generic } from "./http_generic.mjs";
import { http_option_sleep_none } from "./http_option_sleep_none.mjs";
import { file_overwrite_buffer } from "./file_overwrite_buffer.mjs";
export async function http_buffer_file_overwrite(url, file_path) {
  "fetch what is at an address as bytes and write them over whatever the file already held, handing back the path they were written to";
  "it waits for nothing between asking and reading, because the address handed here has already been waited for - a drawing service answers with it only once the picture is finished, so a pause before fetching is time the address spends running out rather than time the picture spends being made.";
  "the path comes back rather than nothing, so a caller that wanted a picture on disk can say where it is in the same line that put it there.";
  let options = http_option_sleep_none();
  let buffer = await http_generic(url, options);
  await file_overwrite_buffer(file_path, buffer);
  return file_path;
}

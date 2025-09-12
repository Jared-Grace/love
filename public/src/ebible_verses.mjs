import { html_parse_read } from "./html_parse_read.mjs";
import { ebible_version_download_path_combine } from "./ebible_version_download_path_combine.mjs";
export async function ebible_verses(bible_folder, chapter_code) {
  let joined = ebible_version_download_path_combine(bible_folder, chapter_code);
  let { d, root } = await html_parse_read(joined);
  return joined;
}

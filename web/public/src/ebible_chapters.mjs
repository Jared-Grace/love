import { html_parse_find_a_href_starts_with } from "./html_parse_find_a_href_starts_with.mjs";
import { list_filter_starts_with_not_multiple } from "./list_filter_starts_with_not_multiple.mjs";
import { list_map } from "./list_map.mjs";
import { html_parse_read } from "./html_parse_read.mjs";
import { path_join } from "./path_join.mjs";
import { ebible_version_download_path } from "./ebible_version_download_path.mjs";
export async function ebible_chapters(bible_folder, book_code) {
  let chapters_name = book_code + ".htm";
  let file_path = ebible_version_download_path(bible_folder);
  let joined = path_join([file_path, chapters_name]);
  let { d, root } = await html_parse_read(joined);
  let filtered = html_parse_find_a_href_starts_with(root, d, book_code);
  function lambda(item) {
    let combined = book_code + item + ".";
    return combined;
  }
  let prefixes = list_map(["00", "000"], lambda);
  let chapters = list_filter_starts_with_not_multiple(filtered, prefixes);
  return chapters;
}

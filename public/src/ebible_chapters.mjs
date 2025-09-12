import { string_suffix_without } from "./string_suffix_without.mjs";
import { ebible_version_download_path_combine } from "./ebible_version_download_path_combine.mjs";
import { html_parse_find_a_href_starts_with } from "./html_parse_find_a_href_starts_with.mjs";
import { list_filter_starts_with_not_multiple } from "./list_filter_starts_with_not_multiple.mjs";
import { list_map } from "./list_map.mjs";
import { html_parse_read } from "./html_parse_read.mjs";
export async function ebible_chapters(bible_folder, book_code) {
  let joined = ebible_version_download_path_combine(bible_folder, book_code);
  let { d, root } = await html_parse_read(joined);
  let filtered = html_parse_find_a_href_starts_with(root, d, book_code);
  function lambda(item) {
    let combined = book_code + item + ".";
    return combined;
  }
  let prefixes = list_map(["00", "000"], lambda);
  let chapters = list_filter_starts_with_not_multiple(filtered, prefixes);
  function lambda2(item2) {
    let without = string_suffix_without(s, suffix);
  }
  let mapped = list_map(list, lambda2);
  return chapters;
}

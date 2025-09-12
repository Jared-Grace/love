import { list_filter } from "./list_filter.mjs";
import { list_unique } from "./list_unique.mjs";
import { html_parse_attr } from "./html_parse_attr.mjs";
import { list_map } from "./list_map.mjs";
import { html_parse_find_list_to } from "./html_parse_find_list_to.mjs";
import { html_parse_find } from "./html_parse_find.mjs";
import { html_parse_read } from "./html_parse_read.mjs";
import { ebible_version_download_path_combine } from "./ebible_version_download_path_combine.mjs";
export async function ebible_verses(bible_folder, chapter_code) {
  let joined = ebible_version_download_path_combine(bible_folder, chapter_code);
  let { d, root } = await html_parse_read(joined);
  let main = html_parse_find(root, ".main");
  let descendants = html_parse_find_list_to(main, "*");
  function lambda(item) {
    let c = html_parse_attr(d, item, "class");
    return c;
  }
  let mapped = list_map(descendants, lambda);
  let unique = list_unique(mapped);
  function lambda2(item2) {}
  let filtered = list_filter(list, lambda2);
  return unique;
}

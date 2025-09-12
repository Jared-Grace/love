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
  let descendants = html_parse_find_list_to(root, "*");
  function lambda(item) {
    let v2 = html_parse_attr(d2, item2, name);
  }
  let mapped = list_map(list, lambda);
  return v;
}

import { list_all } from "./list_all.mjs";
import { assert } from "./assert.mjs";
import { html_parse_descendants_classes } from "./html_parse_descendants_classes.mjs";
import { html_parse_find_remove } from "./html_parse_find_remove.mjs";
import { each } from "./each.mjs";
import { html_parse_classes_preview } from "./html_parse_classes_preview.mjs";
import { html_parse_find } from "./html_parse_find.mjs";
import { html_parse_read } from "./html_parse_read.mjs";
import { ebible_version_download_path_combine } from "./ebible_version_download_path_combine.mjs";
export async function ebible_verses(bible_folder, chapter_code) {
  let joined = ebible_version_download_path_combine(bible_folder, chapter_code);
  let { d, root } = await html_parse_read(joined);
  let main = html_parse_find(root, ".main");
  let classes = html_parse_descendants_classes(main, d);
  let include = ["m", "pmo", "q", "q2"];
  let exclude = [
    "b",
    "chapterlabel",
    "copyright",
    "f",
    "footnote",
    "ft",
    "mt",
    "notebackref",
    "notemark",
    "popup",
    "r",
    "s",
    "s2",
    "tnav",
    "verse",
  ];
  list_all(list, function lambda2(item2) {});
  assert(b);
  let dictionary = html_parse_classes_preview(main, d, include);
  function lambda(item) {
    html_parse_find_remove(main, "." + item);
  }
  each(exclude, lambda);
  return dictionary;
}

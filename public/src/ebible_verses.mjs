import { log } from "./log.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_difference } from "./list_difference.mjs";
import { html_parse_descendants_classes } from "./html_parse_descendants_classes.mjs";
import { html_parse_find_remove } from "./html_parse_find_remove.mjs";
import { each } from "./each.mjs";
import { html_parse_classes_preview } from "./html_parse_classes_preview.mjs";
import { html_parse_find } from "./html_parse_find.mjs";
import { html_parse_read } from "./html_parse_read.mjs";
import { ebible_version_download_path_combine } from "./ebible_version_download_path_combine.mjs";
import { assert_json } from "./assert_json.mjs";
export async function ebible_verses(bible_folder, chapter_code) {
  log(chapter_code);
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
  let list2 = list_difference(classes, include);
  let list3 = list_difference(list2, exclude);
  let e = list_empty_is(list3);
  assert_json(e, {
    e,
  });
  let dictionary = html_parse_classes_preview(main, d, include);
  function lambda(item) {
    html_parse_find_remove(main, "." + item);
  }
  each(exclude, lambda);
  return dictionary;
}

import { list_join_space } from "./list_join_space.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
import { list_map } from "./list_map.mjs";
import { css_class_prefix_combine } from "./css_class_prefix_combine.mjs";
import { ebible_verses_exclude } from "./ebible_verses_exclude.mjs";
import { ebible_verses_include } from "./ebible_verses_include.mjs";
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
  let include = ebible_verses_include();
  let exclude = ebible_verses_exclude();
  let list2 = list_difference(classes, include);
  let extra = list_difference(list2, exclude);
  let e = list_empty_is(extra);
  let dictionary = html_parse_classes_preview(main, d, extra);
  assert_json(e, {
    extra,
    dictionary,
  });
  function lambda(item) {
    let selector2 = css_class_prefix_combine(item);
    html_parse_find_remove(main, selector2);
  }
  each(exclude, lambda);
  let mapped = list_map(include, css_class_prefix_combine);
  let joined2 = list_join_space(mapped);
  log(message);
  let result = html_parse_find(main, joined2);
  let text = html_parse_text(d, result);
  return text;
}

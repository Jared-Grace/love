import { log } from "./log.mjs";
import { roman_to_integer } from "./roman_to_integer.mjs";
import { list_intersect_empty_is_assert } from "./list_intersect_empty_is_assert.mjs";
import { list_empty_is_assert } from "./list_empty_is_assert.mjs";
import { whitespace_normalize } from "./whitespace_normalize.mjs";
import { list_map } from "./list_map.mjs";
import { html_parse_find_list_to } from "./html_parse_find_list_to.mjs";
import { marker } from "./marker.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
import { css_class_prefix_combine } from "./css_class_prefix_combine.mjs";
import { ebible_verses_exclude } from "./ebible_verses_exclude.mjs";
import { ebible_verses_include } from "./ebible_verses_include.mjs";
import { list_difference } from "./list_difference.mjs";
import { html_parse_descendants_classes } from "./html_parse_descendants_classes.mjs";
import { html_parse_find_remove } from "./html_parse_find_remove.mjs";
import { each } from "./each.mjs";
import { html_parse_classes_preview } from "./html_parse_classes_preview.mjs";
import { html_parse_find } from "./html_parse_find.mjs";
import { html_parse_read } from "./html_parse_read.mjs";
import { ebible_version_download_path_combine } from "./ebible_version_download_path_combine.mjs";
export async function ebible_chapter_text(bible_folder, chapter_code) {
  marker("1");
  let joined = ebible_version_download_path_combine(bible_folder, chapter_code);
  let { d, root } = await html_parse_read(joined);
  let main = html_parse_find(root, ".main");
  let classes = html_parse_descendants_classes(main, d);
  let include = ebible_verses_include();
  let exclude = ebible_verses_exclude();
  list_intersect_empty_is_assert(include, exclude);
  let list2 = list_difference(classes, include);
  let extra = list_difference(list2, exclude);
  let dictionary = html_parse_classes_preview(main, d, extra);
  list_empty_is_assert(extra, {
    extra,
    dictionary,
  });
  function lambda(item) {
    let selector2 = css_class_prefix_combine(item);
    html_parse_find_remove(main, selector2);
  }
  each(exclude, lambda);
  let list = html_parse_find_list_to(main, ".verse");
  function lambda2(item) {
    let t = html_parse_text(d, item);
    let n = whitespace_normalize(t);
    return n;
  }
  let verse_numbers = list_map(list, lambda2);
  log({
    verse_numbers,
  });
  verse_numbers = list_map(verse_numbers, roman_to_integer);
  log({
    verse_numbers,
  });
  let text = html_parse_text(d, main);
  let result = {
    verse_numbers,
    text,
  };
  return result;
}

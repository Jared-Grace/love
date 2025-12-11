import { string_prefix_without } from "../../../love/public/src/string_prefix_without.mjs";
import { html_parse_attr } from "../../../love/public/src/html_parse_attr.mjs";
import { roman_to_integer } from "../../../love/public/src/roman_to_integer.mjs";
import { list_intersect_empty_is_assert } from "../../../love/public/src/list_intersect_empty_is_assert.mjs";
import { list_empty_is_assert_json } from "../../../love/public/src/list_empty_is_assert_json.mjs";
import { whitespace_normalize } from "../../../love/public/src/whitespace_normalize.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { html_parse_find_list_to } from "../../../love/public/src/html_parse_find_list_to.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { html_parse_text } from "../../../love/public/src/html_parse_text.mjs";
import { css_class_prefix_combine } from "../../../love/public/src/css_class_prefix_combine.mjs";
import { ebible_verses_exclude } from "../../../love/public/src/ebible_verses_exclude.mjs";
import { ebible_verses_include } from "../../../love/public/src/ebible_verses_include.mjs";
import { list_difference } from "../../../love/public/src/list_difference.mjs";
import { html_parse_descendants_classes } from "../../../love/public/src/html_parse_descendants_classes.mjs";
import { html_parse_find_remove } from "../../../love/public/src/html_parse_find_remove.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { html_parse_classes_preview } from "../../../love/public/src/html_parse_classes_preview.mjs";
import { html_parse_find } from "../../../love/public/src/html_parse_find.mjs";
import { html_parse_read } from "../../../love/public/src/html_parse_read.mjs";
import { ebible_version_download_path_combine } from "../../../love/public/src/ebible_version_download_path_combine.mjs";
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
  list_empty_is_assert_json(extra, {
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
    const name = "id";
    let id = html_parse_attr(d, item, name);
    let without = string_prefix_without(id, "V");
    let i = roman_to_integer(without);
    let n = whitespace_normalize(t);
    let v = {
      number: i,
      name: n,
    };
    return v;
  }
  let verse_numbers = list_map(list, lambda2);
  let text = html_parse_text(d, main);
  let result = {
    verse_numbers,
    text,
  };
  return result;
}

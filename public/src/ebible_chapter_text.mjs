import { whitespace_normalize } from "../../../love/public/src/whitespace_normalize.mjs";
import { roman_to_integer } from "../../../love/public/src/roman_to_integer.mjs";
import { text_prefix_without } from "../../../love/public/src/text_prefix_without.mjs";
import { html_parse_attr } from "../../../love/public/src/html_parse_attr.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { html_parse_find_list_to } from "../../../love/public/src/html_parse_find_list_to.mjs";
import { html_parse_find } from "../../../love/public/src/html_parse_find.mjs";
import { html_parse_read } from "../../../love/public/src/html_parse_read.mjs";
import { ebible_version_download_path_combine } from "../../../love/public/src/ebible_version_download_path_combine.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { html_parse_find_remove } from "../../../love/public/src/html_parse_find_remove.mjs";
import { css_class_prefix_combine } from "../../../love/public/src/css_class_prefix_combine.mjs";
import { list_empty_is_assert_json } from "../../../love/public/src/list_empty_is_assert_json.mjs";
import { html_parse_classes_preview } from "../../../love/public/src/html_parse_classes_preview.mjs";
import { list_difference } from "../../../love/public/src/list_difference.mjs";
import { list_intersect_empty_is_assert } from "../../../love/public/src/list_intersect_empty_is_assert.mjs";
import { ebible_verses_exclude } from "../../../love/public/src/ebible_verses_exclude.mjs";
import { ebible_verses_include } from "../../../love/public/src/ebible_verses_include.mjs";
import { html_parse_descendants_classes } from "../../../love/public/src/html_parse_descendants_classes.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { html_parse_text } from "../../../love/public/src/html_parse_text.mjs";
export async function ebible_chapter_text(bible_folder, chapter_code) {
  let chapter_path = ebible_version_download_path_combine(
    bible_folder,
    chapter_code,
  );
  let v2 = await html_parse_read(chapter_path);
  let root = property_get(v2, "root");
  let d = property_get(v2, "d");
  let main = html_parse_find(root, ".main");
  let list = html_parse_find_list_to(main, ".verse");
  let verse_numbers = list_map(list, lambda2);
  function lambda2(item2) {
    let t = html_parse_text(d, item2);
    const name = "id";
    let id = html_parse_attr(d, item2, name);
    let without = text_prefix_without(id, "V");
    let i = roman_to_integer(without);
    let n = whitespace_normalize(t);
    let v4 = {
      number: i,
      name: n,
    };
    return v4;
  }
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
  let text = html_parse_text(d, main);
  let result = {
    verse_numbers,
    text,
  };
  return result;
}

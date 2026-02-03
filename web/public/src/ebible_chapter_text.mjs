import { whitespace_normalize } from "../../../love/public/src/whitespace_normalize.mjs";
import { roman_to_integer } from "../../../love/public/src/roman_to_integer.mjs";
import { string_prefix_without } from "../../../love/public/src/string_prefix_without.mjs";
import { html_parse_attr } from "../../../love/public/src/html_parse_attr.mjs";
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
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { ebible_chapter_verse_numbers } from "../../../love/public/src/ebible_chapter_verse_numbers.mjs";
import { html_parse_text } from "../../../love/public/src/html_parse_text.mjs";
export async function ebible_chapter_text(bible_folder, chapter_code) {
  let v = await ebible_chapter_verse_numbers(bible_folder, chapter_code);
  let verse_numbers = object_property_get(v, "verse_numbers");
  let main = object_property_get(v, "main");
  let d = object_property_get(v, "d");
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
  let text = html_parse_text(d, main);
  let result = {
    verse_numbers,
    text,
  };
  return result;
}

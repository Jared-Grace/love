import { ebible_chapter_main_parsed } from "./ebible_chapter_main_parsed.mjs";
import { ebible_main_verse_numbers } from "./ebible_main_verse_numbers.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { html_parse_find_remove } from "./html_parse_find_remove.mjs";
import { css_class_prefix_combine } from "./css_class_prefix_combine.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { html_parse_classes_preview } from "./html_parse_classes_preview.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_intersect_empty_is_assert_json } from "./list_intersect_empty_is_assert_json.mjs";
import { ebible_verses_exclude } from "./ebible_verses_exclude.mjs";
import { ebible_verses_include } from "./ebible_verses_include.mjs";
import { html_parse_descendants_classes } from "./html_parse_descendants_classes.mjs";
import { property_get } from "./property_get.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
export async function ebible_chapter_text(bible_folder, chapter_code) {
  arguments_assert(arguments, 2);
  let opened = await ebible_chapter_main_parsed(bible_folder, chapter_code);
  let d = property_get(opened, "d");
  let main = property_get(opened, "main");
  let verse_numbers = ebible_main_verse_numbers(d, main);
  let classes = html_parse_descendants_classes(main, d);
  let include = ebible_verses_include();
  let exclude = ebible_verses_exclude();
  list_intersect_empty_is_assert_json(include, exclude, {
    hint: "the include and exclude verse sets shouldn't overlap — a verse is listed in both",
  });
  let list = list_difference(classes, include);
  let extra = list_difference(list, exclude);
  let dictionary = html_parse_classes_preview(main, d, extra);
  list_empty_is_assert_json(extra, {
    extra,
    dictionary,
  });
  function lambda(item) {
    let selector = css_class_prefix_combine(item);
    html_parse_find_remove(main, selector);
  }
  each(exclude, lambda);
  let text = html_parse_text(d, main);
  let result = {
    verse_numbers,
    text,
  };
  return result;
}

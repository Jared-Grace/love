import { ebible_chapter_verse_numbers } from "./ebible_chapter_verse_numbers.mjs";
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
export async function ebible_chapter_main_ready(bible_folder, chapter_code) {
  arguments_assert(arguments, 2);
  ("One chapter's page opened and cleared of everything that is not the chapter: the parser it was read with, the element its words live in, and the mark the page puts at the start of each verse.");
  ("What is cleared away is footnotes, the notes' own popups, headings and the like - named in the two lists this asks, one of things kept and one of things dropped. A class belonging to neither list stops the reading rather than being guessed at, because a page that has started using a new kind of element is a page nobody has looked at yet.");
  ("Named apart from the readings that use it because there is more than one of them now, and clearing the page is the part they must do identically. One reading flattens what is left into a run of words; another marks each verse first and so learns which verses have words at all.");
  let opened = await ebible_chapter_verse_numbers(bible_folder, chapter_code);
  let d = property_get(opened, "d");
  let main = property_get(opened, "main");
  let verse_numbers = property_get(opened, "verse_numbers");
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
  let r = {
    d,
    main,
    verse_numbers,
  };
  return r;
}

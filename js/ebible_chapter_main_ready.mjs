import { ebible_version_download_path_combine } from "./ebible_version_download_path_combine.mjs";
import { ebible_chapter_furniture_remove } from "./ebible_chapter_furniture_remove.mjs";
import { ebible_chapter_verse_numbers } from "./ebible_chapter_verse_numbers.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
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
  ("A name on the dropped list is not on its own enough to drop an element by, so what the element holds is asked as well - see the reading that does the dropping.");
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
  ("The refusal names the page it happened on, because what it asks for is that somebody go and look at that page, and it used to say only which kind of element was new. One word with no address is a question nobody can answer: three hundred translations were being read, any of them could have been the one, and finding out meant reading them again until it stopped in the same place.");
  ("The page is spelled as a path rather than as the two names it is made of, so that going to look is opening what is written down rather than working out where it lives first.");
  let page_path = ebible_version_download_path_combine(
    bible_folder,
    chapter_code,
  );
  list_empty_is_assert_json(extra, {
    hint: "this page uses a kind of element neither list has an answer for, so reading it stopped rather than guessing whether those are part of the chapter or furniture around it - open the page, see what they hold, and add each one to the kept list or the dropped list",
    bible_folder,
    chapter_code,
    page_path,
    extra,
    dictionary,
  });
  function lambda(item) {
    let selector = css_class_prefix_combine(item);
    ebible_chapter_furniture_remove(d, main, selector);
  }
  each(exclude, lambda);
  let r = {
    d,
    main,
    verse_numbers,
  };
  return r;
}

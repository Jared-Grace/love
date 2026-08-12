import { property_list_size } from "./property_list_size.mjs";
import { list_map_sum } from "./list_map_sum.mjs";
import { list_filter_map_property } from "./list_filter_map_property.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_chapter_verse_numbers_storage_try } from "./ebible_chapter_verse_numbers_storage_try.mjs";
import { null_is } from "./null_is.mjs";
import { list_difference } from "./list_difference.mjs";
import { ebible_chapter_verse_code } from "./ebible_chapter_verse_code.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { lists_combine } from "./lists_combine.mjs";
export async function bible_folder_verse_holes(bible_folder, chapters) {
  "Which of the verses a page will ask this bible for it has nothing to answer with.";
  "The asking is driven by the English index, so that is what a verse being there or not is measured against. A bible numbering its verses its own way is not wrong for doing so, but a reader who chose it beside English still gets a gap where the page asked for a number it does not use - and this counts the gaps rather than the disagreements, because the gap is what the reader sees.";
  "A chapter that is missing entirely counts as every one of its verses missing, and is named on its own as well. The two readings are the same fact at different sizes: the holes tell a reader how much is unreachable, the absent chapters tell whoever fixes it where to start.";
  async function lambda(chapter) {
    let chapter_code = property_get(chapter, "chapter_code");
    let wanted = property_get(chapter, "verse_numbers");
    let held = await ebible_chapter_verse_numbers_storage_try(
      bible_folder,
      chapter_code,
    );
    let absent = null_is(held);
    let numbers = held;
    if (absent) {
      numbers = [];
    }
    let missing = list_difference(wanted, numbers);
    function lambda2(verse_number) {
      let code = ebible_chapter_verse_code(chapter_code, verse_number);
      return code;
    }
    let named = list_map(missing, lambda2);
    let measured = {
      chapter_code,
      absent,
      holes: named,
    };
    return measured;
  }
  let each_chapter = await list_map_unordered_async(chapters, lambda);
  function lambda3(measured) {
    let absent = property_get(measured, "absent");
    return absent;
  }
  let chapters_absent = list_filter_map_property(
    each_chapter,
    lambda3,
    "chapter_code",
  );
  list_sort_text(chapters_absent);
  function lambda4(measured) {
    let chapter_holes = property_get(measured, "holes");
    return chapter_holes;
  }
  let holes_each = list_map(each_chapter, lambda4);
  let holes = lists_combine(holes_each);
  list_sort_text(holes);
  function lambda5(chapter) {
    let size = property_list_size(chapter, "verse_numbers");
    return size;
  }
  let asked = list_map_sum(chapters, lambda5);
  let r = {
    bible_folder,
    asked,
    chapters_absent,
    holes,
  };
  return r;
}

import { each } from "./each.mjs";
import { property_get } from "./property_get.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { text_digits_is } from "./text_digits_is.mjs";
import { not } from "./not.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { list_map } from "./list_map.mjs";
import { lists_combine } from "./lists_combine.mjs";
export function ebible_index_flats_union(chapter_codes, lists) {
  "Several bibles' flat indexes as one list of the verses a reader who chose all of them could be shown.";
  "A page walking one bible's index asks every other bible for that bible's verse numbers, and a bible numbering its verses its own way then has a hole at every number it does not use. Walking the union instead means a number is on the list because some bible the reader actually chose has it - so a reader who did not choose the bible that has a number never sees the gap where it would have been, and a reader who chose both sees it, which is the truth: those two bibles disagree about the numbering there.";
  "The chapters come in already ordered and from somewhere else, because the order is the bible's own and the union has no way to work it out. Sorting the codes would put Amos before Genesis, and taking the order off whichever bible came first would put a whole testament at the end for a reader whose first choice is a New Testament only.";
  "A chapter no chosen bible has contributes nothing rather than an empty place, and a verse number written any way but in digits is left out. Some bibles number in their own figures, and some name a joined pair by both its ends - those keys are real, but a page cannot ask another bible for one, so putting them on the walk would give every other language a blank beside them.";
  let by_chapter = {};
  function each_list(list) {
    function each_entry(entry) {
      let chapter_code = property_get(entry, "chapter_code");
      let property_name = verse_number_key();
      let verse_number = property_get(entry, property_name);
      let digits = text_digits_is(verse_number);
      let n = not(digits);
      if (n) {
        return;
      }
      let numbers = property_get_or(by_chapter, chapter_code, null);
      let absent = null_is(numbers);
      if (absent) {
        numbers = [];
        property_set(by_chapter, chapter_code, numbers);
      }
      list_add(numbers, verse_number);
    }
    each(list, each_entry);
  }
  each(lists, each_list);
  function lambda(chapter_code) {
    let numbers = property_get_or(by_chapter, chapter_code, null);
    let absent = null_is(numbers);
    if (absent) {
      let none = [];
      return none;
    }
    let unique = list_unique(numbers);
    list_sort_number_mapper(unique, number_from_text);
    function lambda2(verse_number) {
      let entry = {
        chapter_code,
        verse_number,
      };
      return entry;
    }
    let mapped = list_map(unique, lambda2);
    return mapped;
  }
  let mapped_each = list_map(chapter_codes, lambda);
  let union = lists_combine(mapped_each);
  return union;
}

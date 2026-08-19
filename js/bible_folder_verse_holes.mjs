import { property_list_size } from "./property_list_size.mjs";
import { list_map_sum } from "./list_map_sum.mjs";
import { list_filter_map_property } from "./list_filter_map_property.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_chapter_verse_numbers_storage_outcome } from "./ebible_chapter_verse_numbers_storage_outcome.mjs";
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
  "A CHAPTER THAT COULD NOT BE ASKED IS NAMED ON ITS OWN AND CONTRIBUTES NO HOLES, which is the difference between a record of what bibles hold and a record of how a run went. An ask that got no answer taught nobody anything about that bible, so counting its verses as missing would be writing this program's failure down as somebody else's gap - and it would look exactly like a real gap, which is what makes it worse than leaving it out.";
  "IT WAS DOING PRECISELY THAT UNTIL IT WAS MEASURED. A run over every shipped bible - two hundred and seventy seven of them, twenty four chapters each - came back saying the English Berean Bible is missing sixteen of the twenty four chapters of Luke. Asked again for one of those chapters on its own, that same bible answered with all fifty two verses. The run had been measuring how many of six thousand simultaneous fetches survived and calling the answer a property of the bibles.";
  "THE UNREACHABLE ARE LEFT FOR THE GATE TO REFUSE rather than quietly dropped, and that is what stops the fix trading one silence for another. Holes are a fact somebody has to read and decide about, so they stand. A chapter nobody could reach is not a fact yet, so it stands too, in its own list, where a gate can say the measuring is unfinished and name the command that finishes it.";
  async function lambda(chapter) {
    let chapter_code = property_get(chapter, "chapter_code");
    let wanted = property_get(chapter, "verse_numbers");
    let outcome = await ebible_chapter_verse_numbers_storage_outcome(
      bible_folder,
      chapter_code,
    );
    let absent = property_get(outcome, "absent");
    let unreachable = property_get(outcome, "unreachable");
    let numbers = property_get(outcome, "verse_numbers");
    let missing = list_difference(wanted, numbers);
    function lambda2(verse_number) {
      let code = ebible_chapter_verse_code(chapter_code, verse_number);
      return code;
    }
    let named = list_map(missing, lambda2);
    if (unreachable) {
      named = [];
    }
    let measured = {
      chapter_code,
      absent,
      unreachable,
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
  function lambda6(measured) {
    let unreachable = property_get(measured, "unreachable");
    return unreachable;
  }
  let chapters_unreachable = list_filter_map_property(
    each_chapter,
    lambda6,
    "chapter_code",
  );
  list_sort_text(chapters_unreachable);
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
    chapters_unreachable,
    holes,
  };
  return r;
}

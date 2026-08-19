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
  "THIS CANNOT TELL A MISSING CHAPTER FROM A FETCH THAT FAILED, and until it can, a whole record written by a wide run should not be believed. The reader below returns nothing for both cases, and nothing is read here as absent - so every network error a run collects is written down as a fact about a bible, in a shape that looks exactly like a real gap and that no gate refuses.";
  "IT IS MEASURED RATHER THAN SUSPECTED. A run over every shipped bible - two hundred and seventy seven of them, twenty four chapters each, all asked at once because both loops here are unordered and unbounded - came back saying the English Berean Bible is missing sixteen of the twenty four chapters of Luke. Asked again for one of those chapters on its own, that same bible answered with all fifty two verses. So the run was measuring how many of six and a half thousand simultaneous fetches survived, and calling the answer a property of the bibles.";
  "TWO THINGS HAVE TO CHANGE TOGETHER and neither one alone is enough. Slowing the run down makes failures rarer and still records the ones that happen as absence; telling a failure apart from an absence needs the reader to say WHICH it met, and needs the record to carry a third state - asked, and could not be told - that the gate then treats as work outstanding rather than as a fact. That third state is a change to what this record means, so it is written here as a finding for somebody to decide on rather than guessed at.";
  "THE TELLING APART IS NOT MISSING, IT IS DISCARDED, which makes this a small change rather than a large one and is worth knowing before anybody starts. Followed all the way down, the two cases are already distinct where they happen: a chapter that is genuinely not there comes back as a refusal carrying the status the far end gave, and a fetch that failed comes back as a socket error carrying a code and no status at all. They stay distinct until the reader below catches every throw alike and answers nothing for both. So what has to be built is a reader that passes on WHICH of the two it met, not a way of finding out - the finding out is already done and then dropped.";
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

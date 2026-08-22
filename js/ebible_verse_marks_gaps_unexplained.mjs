import { ebible_bible_chapters_skipped } from "./ebible_bible_chapters_skipped.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_verse_marks_gaps_measure } from "./ebible_verse_marks_gaps_measure.mjs";
import { ebible_verse_marks_displaced_measure } from "./ebible_verse_marks_displaced_measure.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { ebible_verse_gaps_critical_text_omitted } from "./ebible_verse_gaps_critical_text_omitted.mjs";
import { list_includes } from "./list_includes.mjs";
import { ebible_verse_gap_name } from "./ebible_verse_gap_name.mjs";
import { list_group_by_property } from "./list_group_by_property.mjs";
import { list_size } from "./list_size.mjs";
import { list_map } from "./list_map.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_slice } from "./list_slice.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export async function ebible_verse_marks_gaps_unexplained() {
  "Every verse number a chapter leaves out that neither the known publishing fault nor the known textual omissions account for, gathered under the translation it is in.";
  arguments_assert(arguments, 0);
  ("Two of the three reasons a number can be missing need no judgment at all, so they are taken away first and what is left is the only part a person has to read. A chapter carrying a displaced id is missing that number because of the fault already being written about, and reporting it again as a gap asks the same reader to fix the same thing twice. A number on the critical-text list is missing because the translation's editors meant it to be.");
  ("Gathered under the translation rather than listed one gap at a time, because that is what turns the answer from a thing nobody can read into a thing anybody can. The corpus holds a few thousand gaps, and a translation skipping four thousand numbers is one question about that translation - is this how it numbers, or is something wrong - while a translation skipping four is four chapters worth naming in a letter. Both are one row here, and the count is what tells them apart, so no line has to be drawn in advance.");
  ("Nothing is dropped for being widely shared. Sharing was what found the critical-text list, and once found the list stands on its own, so the count is not consulted again. A gap shared by five translations of the Septuagint is still reported here, because whether the Greek text is the reason for it is a judgment about those translations and this hands it over rather than making it.");
  ("How many whole chapters the translation skips is carried alongside, because a translation with a hole in its chapters is publishing a selection and its missing verses are that same editorial choice. It is a field and not a filter, for the same reason as the paragraph above: mwf2018 leaves out fifty-one verses of Matthew 27 and skips Psalms entirely, and the second fact is what settles the first - but the reader is the one who should get to see both and say so.");
  let gaps_measured = await ebible_verse_marks_gaps_measure();
  let displaced_measured = await ebible_verse_marks_displaced_measure();
  let displaced_chapters = [];
  function displaced_bible_note(bible) {
    let bible_folder = property_get(bible, "bible_folder");
    let chapters = property_get(bible, "found");
    function displaced_chapter_note(chapter) {
      let chapter_code = property_get(chapter, "chapter_code");
      let address = list_join_space([bible_folder, chapter_code]);
      list_add(displaced_chapters, address);
    }
    each(chapters, displaced_chapter_note);
  }
  let list = property_get(displaced_measured, "bibles");
  each(list, displaced_bible_note);
  let omitted = ebible_verse_gaps_critical_text_omitted();
  let rows = [];
  function gaps_bible_read(bible) {
    let bible_folder = property_get(bible, "bible_folder");
    let gapped = property_get(bible, "found");
    function gaps_chapter_read(chapter) {
      let chapter_code = property_get(chapter, "chapter_code");
      let address = list_join_space([bible_folder, chapter_code]);
      let already = list_includes(displaced_chapters, address);
      if (already) {
        return;
      }
      let gaps = property_get(chapter, "found");
      function gap_read(number) {
        let name = ebible_verse_gap_name(chapter_code, number);
        let deliberate = list_includes(omitted, name);
        if (deliberate) {
          return;
        }
        let row = {
          bible_folder,
          chapter_code,
          name,
        };
        list_add(rows, row);
      }
      each(gaps, gap_read);
    }
    each(gapped, gaps_chapter_read);
  }
  let list2 = property_get(gaps_measured, "bibles");
  each(list2, gaps_bible_read);
  let grouped = list_group_by_property(rows, "bible_folder");
  async function bible_summary(group) {
    let bible_folder = property_get(group, "key");
    let items = property_get(group, "items");
    let gaps = list_size(items);
    function chapter_code_of(item) {
      let chapter_code = property_get(item, "chapter_code");
      return chapter_code;
    }
    let chapter_codes = list_map(items, chapter_code_of);
    let list3 = list_unique(chapter_codes);
    let chapters = list_size(list3);
    function name_of(item) {
      let name = property_get(item, "name");
      return name;
    }
    let names = list_map(items, name_of);
    let examples = list_slice(names, 0, 5);
    let skipped = await ebible_bible_chapters_skipped(bible_folder);
    let chapters_skipped = list_size(skipped);
    let summary = {
      bible_folder,
      gaps,
      chapters,
      chapters_skipped,
      examples,
    };
    return summary;
  }
  let summaries = await list_map_async(grouped, bible_summary);
  function gaps_of(summary) {
    let gaps = property_get(summary, "gaps");
    return gaps;
  }
  list_sort_number_mapper_reverse(summaries, gaps_of);
  return summaries;
}

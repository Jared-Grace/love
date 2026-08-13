import { ebible_bible_folders_sorted } from "./ebible_bible_folders_sorted.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_readaloud_lines_path } from "./ebible_readaloud_lines_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { lists_combine } from "./lists_combine.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_size } from "./list_size.mjs";
import { list_sum } from "./list_sum.mjs";
import { list_map } from "./list_map.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function ebible_readaloud_lines_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: no bible has a chapter written for reading aloud in a different number of lines from the number of verses its own pages mark.");
  ("Every verse of every bible outside a browser is now read as the line the reading-aloud text gives it, numbered by the mark its page carries. Both halves come from the same source and neither knows about the other, so what holds them together is only that the counts agree - a rule measured across three and a half thousand chapters and true in all of them, but nothing enforces it.");
  ("The two ways of breaking it are not equally loud. Where the lines outnumber the marks the pairing runs off the end and throws, which is how a bible losing its whole index over one verse was found. Where the marks outnumber the lines the chapter is quietly cut short instead: the verses at its end are dropped, every verse before them is right, and no error is raised anywhere. That silent half is what this is for.");
  ("A bible whose pages are not on this machine is named apart in the record rather than refused, because not having the files is a fact about a machine and not a fault in a bible.");
  ("This reads only the file. The measuring opens every chapter of every bible and is a command somebody runs.");
  let path = ebible_readaloud_lines_path();
  let recorded = await file_read_json(path);
  let bibles = property_get(recorded, "bibles");
  let unmeasured = property_get(recorded, "unmeasured");
  let f_name = fn_name("ebible_readaloud_lines_write");
  list_empty_not_is_assert_json(bibles, {
    hint: text_combine_multiple([
      "the record measures no bible at all, so this gate would pass without asking anything - measure again with ",
      f_name,
      ", which rewrites the record",
    ]),
  });
  function lambda(measured) {
    let uneven = property_get(measured, "differ");
    return uneven;
  }
  let differ_each = list_map(bibles, lambda);
  let differ = lists_combine(differ_each);
  let f_name2 = fn_name("ebible_readaloud_lines_write");
  list_empty_is_assert_json(differ, {
    hint: text_combine_multiple([
      "a chapter is written for reading aloud in a different number of lines from the number of verses its page marks, so its verses no longer line up with their numbers - where the marks are the greater count the chapter is silently cut short. Look at the chapter itself; when it is put right, measure again with ",
      f_name2,
    ]),
    differ,
  });
  let measured_names = list_map_property(bibles, "bible_folder");
  let answered = lists_combine([measured_names, unmeasured]);
  let f_name3 = fn_name("ebible_readaloud_lines_write");
  let unasked_hint = text_combine_multiple([
    "a bible is shipped that this record says nothing about, so its chapters have never been measured and one of them could be cut short unseen - measure again with ",
    f_name3,
  ]);
  ebible_bibles_answered_assert(answered, f_name3, unasked_hint);
  function lambda2(measured) {
    let chapters = property_get(measured, "same");
    return chapters;
  }
  let same_each = list_map(bibles, lambda2);
  let r = {
    bibles: list_size(bibles),
    chapters: list_sum(same_each),
    unmeasured: list_size(unmeasured),
    differ,
  };
  return r;
}

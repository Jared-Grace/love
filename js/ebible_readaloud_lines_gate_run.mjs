import { ebible_readaloud_lines_offered_unchecked } from "./ebible_readaloud_lines_offered_unchecked.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { ebible_readaloud_bible_folders } from "./ebible_readaloud_bible_folders.mjs";
import { ebible_readaloud_lines_differ_names } from "./ebible_readaloud_lines_differ_names.mjs";
import { ebible_readaloud_lines_baseline_path } from "./ebible_readaloud_lines_baseline_path.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { ebible_bibles_answered_assert } from "./ebible_bibles_answered_assert.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_readaloud_lines_path } from "./ebible_readaloud_lines_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { lists_combine } from "./lists_combine.mjs";
import { list_size } from "./list_size.mjs";
import { list_sum } from "./list_sum.mjs";
import { list_map } from "./list_map.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function ebible_readaloud_lines_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: no bible has a chapter written for reading aloud in a different number of lines from the number of verses its own pages mark.");
  ("Every verse of every bible outside a browser is now read as the line the reading-aloud text gives it, numbered by the mark its page carries. Both halves come from the same source and neither knows about the other, so what holds them together is only that the counts agree - a rule measured across three and a half thousand chapters and true in all of them, but nothing enforces it.");
  ("Both ways of breaking it used to be worse than they are now. Where the lines outnumbered the marks the pairing ran off the end and threw, which is how a bible losing its whole index over one verse was found; where the marks outnumbered the lines the chapter was quietly cut short instead, its last verses dropped, every verse before them right, and no error raised anywhere. Neither happens now - a chapter whose counts disagree is answered for with nothing and shown to nobody.");
  ("So what this watches is no longer whether such a chapter exists but how many there are, and it is measured against what the repo already carried rather than against zero. Seventy-two chapters across thirteen bibles were already like this when it was first asked, each needing its own look, and the list only shrinks: a new one fails, and one left in the record after it has been put right fails too. A chapter in the list is a chapter of the Bible nobody can read here, so the number going up is the app quietly offering less than it did.");
  ("A bible whose pages are not on this machine is named apart in the record rather than refused, because not having the files is a fact about a machine and not a fault in a bible.");
  ("This reads only the file. The measuring opens every chapter of every bible and is a command somebody runs.");
  ("Each disagreeing chapter is named with the bible it belongs to before they are gathered together. The record keeps them under their bible, and gathering them loses that - which left an answer telling somebody to go and look at Mark 9 without saying whose Mark 9, in a folder holding a Mark 9 for every translation there is.");
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
  ("Being named in the record is not the same as having been read, and until now only the first of those was checked. A bible whose reading-aloud text never reached this machine is written down with every chapter unread and nothing disagreeing, which counts here exactly like a bible read end to end and found right - so the number below said three hundred and forty-seven bibles while seventy-nine of them had not had a single chapter looked at.");
  ("Refused only for the bibles a reader can choose. The rest are a job still to do and saying so every time would make this red for a reason nobody is going to act on; an offered one is a reader being told a chapter is fine when nobody looked, which is the thing this gate exists to stop.");
  ("Asked before anything is measured from the record rather than after, because everything below reads that record as though it were the answer. An offered bible with no chapter read contributes nothing disagreeing, so the list of disagreements below is short by however much of it was never looked at - and comparing that short list against what the repo already carried is a comparison between an answer and a guess. What makes a reading untrustworthy has to be refused before the reading is taken, not after it has been reported.");
  let unchecked = ebible_readaloud_lines_offered_unchecked(recorded);
  let f_name_download = fn_name("ebible_languages_readaloud_download");
  let f_name_measure = fn_name("ebible_readaloud_lines_write");
  list_empty_is_assert_json(unchecked, {
    hint: text_combine_multiple([
      "a bible a reader can choose has chapters nobody has read, so this gate would pass it without having compared a single one of them - fetch what is missing for it with ",
      f_name_download,
      ", then measure again with ",
      f_name_measure,
    ]),
    unchecked,
  });
  function lambda(measured) {
    let uneven = property_get(measured, "differ");
    let bible_folder = property_get(measured, "bible_folder");
    function lambda_bible_folder_name(counts) {
      let counts_named = object_merge_set(counts, {
        bible_folder,
      });
      return counts_named;
    }
    let named = list_map(uneven, lambda_bible_folder_name);
    return named;
  }
  let differ_each = list_map(bibles, lambda);
  let differ = lists_combine(differ_each);
  let f_name2 = fn_name("ebible_readaloud_lines_write");
  let names = await ebible_readaloud_lines_differ_names();
  let baseline_path = ebible_readaloud_lines_baseline_path();
  let name_write = fn_name("ebible_readaloud_lines_baseline_write");
  let hint2 = text_combine_multiple([
    "a chapter is written for reading aloud in a different number of lines from the number of verses its page marks, so its verses cannot be laid against their numbers and nobody is shown that chapter at all. Look at the chapter itself; when it is put right, measure again with ",
    f_name2,
  ]);
  await baseline_names_gate_generic(names, baseline_path, hint2, name_write);
  let measured_names = list_map_property(bibles, "bible_folder");
  let answered = lists_combine([measured_names, unmeasured]);
  let f_name3 = fn_name("ebible_readaloud_lines_write");
  let unasked_hint = text_combine_multiple([
    "a bible is shipped that this record says nothing about, so its chapters have never been measured and one of them could be cut short unseen - measure again with ",
    f_name3,
  ]);
  let expected = ebible_readaloud_bible_folders();
  ebible_bibles_answered_assert(expected, answered, f_name3, unasked_hint);
  function lambda2(measured) {
    let chapters = property_get(measured, "same");
    return chapters;
  }
  let same_each = list_map(bibles, lambda2);
  function lambda3(measured) {
    let chapters_unread = property_get(measured, "unread");
    let count = list_size(chapters_unread);
    return count;
  }
  let unread_each = list_map(bibles, lambda3);
  let r = {
    bibles: list_size(bibles),
    chapters: list_sum(same_each),
    unread: list_sum(unread_each),
    unmeasured: list_size(unmeasured),
    differ,
  };
  return r;
}

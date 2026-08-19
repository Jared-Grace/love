import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { property_get } from "./property_get.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { list_map } from "./list_map.mjs";
import { lists_combine } from "./lists_combine.mjs";
import { fn_name } from "./fn_name.mjs";
import { ebible_readaloud_lines_differ_names } from "./ebible_readaloud_lines_differ_names.mjs";
import { ebible_readaloud_lines_baseline_path } from "./ebible_readaloud_lines_baseline_path.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { ebible_readaloud_bible_folders } from "./ebible_readaloud_bible_folders.mjs";
import { ebible_bibles_answered_assert } from "./ebible_bibles_answered_assert.mjs";
export async function ebible_readaloud_lines_record_assert(
  f_name_download,
  f_name,
  unchecked_names,
  unchecked_path,
  unchecked_write,
  bibles,
  unmeasured,
) {
  arguments_assert(arguments, 7);
  ("Every list the record of reading-aloud line counts carries, held against what it ought to be - and the chapters whose counts disagree, gathered under the bible each belongs to and handed back.");
  ("Three questions rather than one, and they are together because each of the three makes the next one worth asking. Whether every bible a reader can choose has actually been read; whether the chapters found disagreeing are no more than the repo already carried; and whether every bible shipped is spoken about in the record at all. A yes to the second means nothing until the first is answered, because a record with unread bibles in it has fewer disagreements to find.");
  ("Being named in the record is not the same as having been read, and until now only the first of those was checked. A bible whose reading-aloud text never reached this machine is written down with every chapter unread and nothing disagreeing, which counts exactly like a bible read end to end and found right - so the number said three hundred and forty-seven bibles while seventy-nine of them had not had a single chapter looked at.");
  ("Asked only of the bibles a reader can choose. A bible sitting in storage that nobody is offered yet being unread is a job not started; an offered one being unread is somebody told a chapter is fine when nobody looked, and only the second of those is a gate's business.");
  ("Asked before anything is measured from the record rather than after, because everything below reads that record as though it were the answer. An offered bible with no chapter read contributes nothing disagreeing, so the list of disagreements below is short by however much of it was never looked at - and comparing that short list against what the repo already carried is a comparison between an answer and a guess. What makes a reading untrustworthy has to be refused before the reading is taken, not after it has been reported.");
  ("Measured against what the repo already carried rather than against zero, and for the same reason the disagreements are: seventy-nine of the offered bibles were already like this when it was first asked, so refusing them outright would leave this red for a fact about which files happen to sit on one machine. Files not being here is a fact about a machine and not a fault in a bible. What must not happen is the number going up - a bible newly offered whose chapters nobody has read is a reader newly told that something was checked when it was not.");
  ("Each disagreeing chapter is named with the bible it belongs to before they are gathered together. The record keeps them under their bible, and gathering them loses that - which left an answer telling somebody to go and look at Mark 9 without saying whose Mark 9, in a folder holding a Mark 9 for every translation there is.");
  let unchecked_hint = text_combine_multiple([
    "a bible a reader can choose has no chapter of it read, so nothing here has compared a single one of them and the answer below passes over it in silence - fetch what is missing for it with ",
    f_name_download,
    ", then measure again with ",
    f_name,
  ]);
  await baseline_names_gate_generic(
    unchecked_names,
    unchecked_path,
    unchecked_hint,
    unchecked_write,
  );
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
  let hint = text_combine_multiple([
    "a chapter is written for reading aloud in a different number of lines from the number of verses its page marks, so its verses cannot be laid against their numbers and nobody is shown that chapter at all. Look at the chapter itself; when it is put right, measure again with ",
    f_name2,
  ]);
  await baseline_names_gate_generic(names, baseline_path, hint, name_write);
  let measured_names = list_map_property(bibles, "bible_folder");
  let answered = lists_combine([measured_names, unmeasured]);
  let f_name3 = fn_name("ebible_readaloud_lines_write");
  let unasked_hint = text_combine_multiple([
    "a bible is shipped that this record says nothing about, so its chapters have never been measured and one of them could be cut short unseen - measure again with ",
    f_name3,
  ]);
  let expected = ebible_readaloud_bible_folders();
  ebible_bibles_answered_assert(expected, answered, f_name3, unasked_hint);
  return differ;
}

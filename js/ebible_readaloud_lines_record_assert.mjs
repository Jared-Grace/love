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

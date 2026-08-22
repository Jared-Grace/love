import { list_map_unique } from "./list_map_unique.mjs";
import { ebible_readaloud_lines_differ_to_fix_names } from "./ebible_readaloud_lines_differ_to_fix_names.mjs";
import { ebible_readaloud_lines_baseline_path } from "./ebible_readaloud_lines_baseline_path.mjs";
import { baseline_known_read } from "./baseline_known_read.mjs";
import { list_difference } from "./list_difference.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { list_first } from "./list_first.mjs";
import { list_map_async_record_try } from "./list_map_async_record_try.mjs";
import { ebible_readaloud_lines_differ_as_published_record } from "./ebible_readaloud_lines_differ_as_published_record.mjs";
export async function ebible_readaloud_lines_differ_new_record() {
  "Every bible holding a chapter that has only just started disagreeing with its own pages, fetched again from scratch and judged on what comes back.";
  "Widening what gets measured makes chapters appear that were always like that and were simply never looked at. They arrive at the ratchet wearing the same face as a chapter that broke this morning, and the ratchet is right to refuse both, because from where it stands they are the same thing. Separating them is a fetch, not an opinion: a chapter the fresh copy mends was ours to mend, and a chapter that comes back identical was published that way.";
  "Only the ones neither record has heard of are touched. The chapters somebody has already put in the list to work through are left exactly where they are - going and proving those as published would empty a queue that was filled deliberately, and that is a decision for whoever filled it rather than a tidy-up.";
  "The set is worked out here rather than handed in, because it is a difference between two records this repo keeps and a caller retyping it would only be copying out what is already written down. A bible is fetched once however many of its chapters are in the list, which is why this counts bibles where the ratchet counts chapters.";
  "Leaves the record of counts stale about whatever it fetched, since the files underneath have just changed. Measure again afterwards.";
  let to_fix = await ebible_readaloud_lines_differ_to_fix_names();
  let path = ebible_readaloud_lines_baseline_path();
  let known = await baseline_known_read(path);
  let fresh = list_difference(to_fix, known);
  function bible_named(name) {
    let words = text_split_space(name);
    let bible_folder = list_first(words);
    return bible_folder;
  }
  let bible_folders = list_map_unique(fresh, bible_named);
  let recorded = await list_map_async_record_try(
    bible_folders,
    ebible_readaloud_lines_differ_as_published_record,
  );
  let r = {
    fresh: fresh,
    bible_folders: bible_folders,
    recorded: recorded,
  };
  return r;
}

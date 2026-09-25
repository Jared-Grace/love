import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_passages_verse_numbers } from "./gloss_passages_verse_numbers.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { chapter_passages_verse_order_sort } from "./chapter_passages_verse_order_sort.mjs";
import { equal } from "./equal.mjs";
export async function chapter_passages_verse_order_check(chapter_code, fn) {
  "$plain chapter_code";
  "the code is a chapter's name, like HEB12, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "Whether one stored chapter's passages are already in the order the chapter is read in, with the verse numbers as they stand, the verse numbers put in order, and the ordered passages themselves.";
  "IT WRITES NOTHING, AND THAT IS THE WHOLE REASON IT IS ITS OWN FUNCTION. A gate and a repair ask exactly the same question and must never be able to answer it differently, but a gate that ran the repair would mend the store it was asked to judge, and a red gate would come out green the moment anybody looked at it twice.";
  "The ordered passages come back as well as the verdict, so that the one caller allowed to write has nothing left to work out for itself and cannot sort by a second rule.";
  "The comparison is made on the verse numbers joined into one line rather than on the passages, because two passages are large objects and what is being asked is only whether the reading order changed.";
  let path = local_function_path_json(chapter_code, fn);
  let chapter = await file_read_json(path);
  let passages = property_get(chapter, "passages");
  let list = gloss_passages_verse_numbers(passages);
  let before = list_join_comma(list);
  let ordered = chapter_passages_verse_order_sort(passages);
  let list2 = gloss_passages_verse_numbers(ordered);
  let after = list_join_comma(list2);
  let held = equal(before, after);
  let r = {
    chapter_code,
    held,
    before,
    after,
    ordered,
  };
  return r;
}

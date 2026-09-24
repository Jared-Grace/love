import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { gloss_passages_verse_numbers } from "./gloss_passages_verse_numbers.mjs";
import { chapter_passages_verse_order_sort } from "./chapter_passages_verse_order_sort.mjs";
import { equal } from "./equal.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
export async function chapter_passages_verse_order_repair(chapter_code, fn) {
  "$plain chapter_code";
  "the code is a chapter's name, like HEB12, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "One stored chapter put back into the order it is read in, and an answer saying whether it had to be.";
  "THE FILE IS LEFT ALONE WHEN IT IS ALREADY IN ORDER, AND THAT IS WHAT MAKES THIS SAFE TO RUN OVER A WHOLE STORE AT ANY TIME. Every passage is carried across untouched - nothing is added, dropped or reworded - so the only thing that can change is which passage is read first, and where that is already right nothing is written at all.";
  "The verse numbers before and after come back together, because an answer that only said a chapter was reordered leaves nobody able to see what it was reordered out of.";
  let path = local_function_path_json(chapter_code, fn);
  let chapter = await file_read_json(path);
  let passages = property_get(chapter, "passages");
  let list = gloss_passages_verse_numbers(passages);
  let before = list_join_comma(list);
  let ordered = chapter_passages_verse_order_sort(passages);
  let list2 = gloss_passages_verse_numbers(ordered);
  let after = list_join_comma(list2);
  let held = equal(before, after);
  if (held) {
    let same = {
      chapter_code,
      reordered: false,
    };
    return same;
  }
  let contents = json_format_to({
    chapter_code,
    passages: ordered,
  });
  await file_overwrite_uncached(path, contents);
  let r = {
    chapter_code,
    reordered: true,
    before,
    after,
  };
  return r;
}

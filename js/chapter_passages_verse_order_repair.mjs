import { chapter_passages_verse_order_check } from "./chapter_passages_verse_order_check.mjs";
import { property_get } from "./property_get.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
export async function chapter_passages_verse_order_repair(chapter_code, fn) {
  "$plain chapter_code";
  "the code is a chapter's name, like HEB12, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "One stored chapter put back into the order it is read in, and an answer saying whether it had to be.";
  "THE FILE IS LEFT ALONE WHEN IT IS ALREADY IN ORDER, AND THAT IS WHAT MAKES THIS SAFE TO RUN OVER A WHOLE STORE AT ANY TIME. Every passage is carried across untouched - nothing is added, dropped or reworded - so the only thing that can change is which passage is read first, and where that is already right nothing is written at all.";
  "The verse numbers before and after come back together, because an answer that only said a chapter was reordered leaves nobody able to see what it was reordered out of.";
  "THE QUESTION IS ASKED SOMEWHERE ELSE AND ONLY THE WRITING IS DONE HERE, so the gate over this and this repair cannot disagree about which chapters are out of order. Two copies of the comparison would be two chances to sort by a slightly different rule, and the one that ran second would silently be the one believed.";
  let checked = await chapter_passages_verse_order_check(chapter_code, fn);
  let held = property_get(checked, "held");
  if (held) {
    let same = {
      chapter_code,
      reordered: false,
    };
    return same;
  }
  let ordered = property_get(checked, "ordered");
  let path = local_function_path_json(chapter_code, fn);
  let contents = json_format_to({
    chapter_code,
    passages: ordered,
  });
  await file_overwrite_uncached(path, contents);
  let r = {
    chapter_code,
    reordered: true,
    before: property_get(checked, "before"),
    after: property_get(checked, "after"),
  };
  return r;
}

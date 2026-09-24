import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { chapter_passages_verse_order_repair } from "./chapter_passages_verse_order_repair.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_size } from "./list_size.mjs";
export async function chapter_passages_verse_order_repair_all(fn) {
  "Every chapter of one store put back into the order it is read in, with the ones that had to be moved named.";
  "IT FINDS ITS OWN SET RATHER THAN BEING HANDED ONE, so it cannot drift from what is actually out of order. The store is asked which chapters it holds, every one of them is offered the repair, and the ones already in order are left untouched and report so.";
  "IT ASKS A SECOND TIME AND REFUSES TO CLAIM SUCCESS IT HAS NOT SEEN. A repair that ran and a repair that quietly did nothing return the same shape, so the second pass is the proof: after a first pass has put every chapter in order, a second pass must find nothing left to move, and anything it does move means the ordering is not settled by what it was sorted on.";
  "THE VALUE BEING FILTERED FOR IS WRITTEN OUT, BECAUSE LEAVING IT OFF WAS THE FAULT ONCE ALREADY. On the first run of this, 2026-09-24, the filter was asked for a property and given no value to match; it matched nothing, and the answer said nought chapters moved while the folder's own timestamps showed seven hundred and seventy-six had just been rewritten. The repair was right and its report was silent about everything it did.";
  let chapter_codes = await gloss_chapters_stored(fn);
  async function chapter_repair(chapter_code) {
    let found = await chapter_passages_verse_order_repair(chapter_code, fn);
    return found;
  }
  let first = await list_map_async(chapter_codes, chapter_repair);
  let moved_is = true;
  let reordered = list_filter_property(first, "reordered", moved_is);
  let again = await list_map_async(chapter_codes, chapter_repair);
  let left = list_filter_property(again, "reordered", moved_is);
  let settled = list_empty_is(left);
  assert_json(settled, {
    hint: "a second ordering pass moved chapters the first had already put in order — would you like to check what they were sorted on?",
    left,
  });
  let r = {
    chapters: list_size(chapter_codes),
    reordered: list_size(reordered),
    moved: reordered,
  };
  return r;
}

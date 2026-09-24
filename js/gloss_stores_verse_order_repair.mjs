import { gloss_stores_offenders_generic } from "./gloss_stores_offenders_generic.mjs";
import { chapter_passages_verse_order_repair_all } from "./chapter_passages_verse_order_repair_all.mjs";
export async function gloss_stores_verse_order_repair() {
  "Every gloss store there is put back into verse order, chapter by chapter, with the chapters that had to be moved named per store.";
  "IT TAKES NOTHING AND ASKS THE ROSTER, because the set that needs repairing is exactly the set that exists and neither a caller nor this function should be keeping a second copy of it. A store added to the roster is repaired from the moment it joins.";
  "The fault it repairs was in the writer, not in any one store: a chapter is written a passage at a time and each write put its passage last, so a chapter ended up in the order it was authored in rather than the order it is read in. The writer now sorts as it saves, so this is the one pass over what was written before that.";
  "Every store is offered the pass rather than only the one the fault was found in, because the writer is shared and a fault in a shared writer is never one store's.";
  let asked = await gloss_stores_offenders_generic(
    chapter_passages_verse_order_repair_all,
  );
  return asked;
}

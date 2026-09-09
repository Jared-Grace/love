import { gloss_store_counted_versus_baseline } from "./gloss_store_counted_versus_baseline.mjs";
export function gloss_store_dangling_versus_baseline(counts, recorded) {
  "What changed since the record of how often each gloss store sends the reader back to a word met earlier and finds nothing there was written.";
  "A share out of every thousand pointers rather than a count of them, because these stores are still being written and a new chapter brings new pointers however well it is written. A gate on the count would go red at every chapter and would be asking for the store to stop growing rather than for the pointing to get better.";
  let change = gloss_store_counted_versus_baseline(
    counts,
    recorded,
    "dangling_share",
  );
  return change;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { functions_span_candidates } from "./functions_span_candidates.mjs";
import { list_size } from "./list_size.mjs";
export async function functions_span_cut_report(cut, skipped) {
  arguments_assert(arguments, 2);
  ("What a sweep of the cut did, said with the list asked once more at the end so the reader is told what is still standing rather than only what moved.");
  ("Both sweeps end this way and neither could end any other way, because the list they walked was true only of the folder as it stood before they touched it. Every cut they made took a name off it or changed where a name sat, so the count they were given at the start says nothing at all by the time they are finished.");
  ("The rows left over are the point of asking again. They are the functions still standing over the ceiling with a run in them that nobody could name, which is exactly the work the walk cannot do and a person can - so a sweep that answers nothing left has finished, and one that answers a number has handed that number over.");
  ("Only the count is handed back rather than the rows, because the rows are a question about the folder as it stands now and are better asked fresh than read out of an answer that is already going stale.");
  let left = await functions_span_candidates();
  let remaining = list_size(left);
  let r = {
    cut,
    skipped,
    remaining,
  };
  return r;
}

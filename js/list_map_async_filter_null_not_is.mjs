import { list_map_async } from "./list_map_async.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
export async function list_map_async_filter_null_not_is(list, lambda$item) {
  "Ask every item in turn, and keep the answers.";
  "The same shape as asking them all at once, and the same reason for existing: most of what is looked at has nothing to say, so the question answers with nothing and only what did answer is wanted back. Written out, the two halves have to name the list in between, and that name is never about the work - only about the seam between asking and keeping.";
  "In turn rather than at once, which is the whole of the difference. A question that reaches a page or a disk one at a time is asked this way on purpose, and the answers come back in the order the items were given rather than in the order they happened to finish - so a list of what is missing reads in the same order as the list it was asked of.";
  let mapped = await list_map_async(list, lambda$item);
  let kept = list_filter_null_not_is(mapped);
  return kept;
}

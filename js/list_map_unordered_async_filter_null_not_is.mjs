import { arguments_assert } from "./arguments_assert.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
export async function list_map_unordered_async_filter_null_not_is(
  list,
  lambda$item,
) {
  arguments_assert(arguments, 2);
  ("Ask every item at once, and keep the answers.");
  ("A sweep over a folder or over every function in the repo is nearly always this");
  ("shape: most of what is looked at has nothing to say, so the question answers");
  ("with nothing, and only what did answer is wanted back. Written out, the two");
  ("halves have to name the list in between - and that name is never about the work,");
  ("only about the seam between asking and keeping.");
  let mapped = await list_map_unordered_async(list, lambda$item);
  let kept = list_filter_null_not_is(mapped);
  return kept;
}

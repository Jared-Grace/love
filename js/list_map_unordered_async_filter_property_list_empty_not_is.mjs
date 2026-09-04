import { arguments_assert } from "./arguments_assert.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
export async function list_map_unordered_async_filter_property_list_empty_not_is(
  list,
  lambda$item,
  property_name,
) {
  "$plain property_name";
  "Ask every item at once, and keep only the answers that found something.";
  "A sweep that answers one item at a time with a list of what is wrong with that item is nearly always this shape: each answer carries the item's own name beside a list of what it is short of, most of those lists come back empty, and only the ones that did not are the answer. Written out, the two halves have to name the list in between, and that name is never about the work - only about the seam between asking and keeping.";
  "Leaving out an answer with nothing in its list is what makes an empty answer mean the fault is nowhere, which is the shape a gate can be built on. An answer kept for every item asked would say the same word on a clean day as on a broken one, and only the reading of each list would tell them apart.";
  "The name of the property is handed in rather than spelled here. The two sweeps this was taken out of both happened to call it the same word, and nothing was holding them to it; a third written next month is free to call its list something else and still be this same shape.";
  arguments_assert(arguments, 3);
  let mapped = await list_map_unordered_async(list, lambda$item);
  function found_is(answer) {
    let any = property_list_empty_not_is(answer, property_name);
    return any;
  }
  let kept = list_filter(mapped, found_is);
  return kept;
}

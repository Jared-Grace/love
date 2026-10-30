import { property_get } from "./property_get.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
export function gloss_passages_original_present(passages) {
  "The passages that carry some original-language wording, leaving out any with none at all, because a passage with no words has nothing to explain.";
  "A psalm's title is the case met: the English bible numbers it as verse 0 on its own, while the Hebrew carries the same title words at the head of verse 1, so they are explained there.";
  function original_has(passage) {
    let originals = property_get(passage, "originals");
    let present = list_filter_null_not_is(originals);
    let r = list_empty_not_is(present);
    return r;
  }
  let filtered = list_filter(passages, original_has);
  return filtered;
}

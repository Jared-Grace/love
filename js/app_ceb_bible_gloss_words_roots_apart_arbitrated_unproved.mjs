import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_equals } from "./property_equals.mjs";
import { list_filter } from "./list_filter.mjs";
export function app_ceb_bible_gloss_words_roots_apart_arbitrated_unproved(r2) {
  arguments_assert(arguments, 1);
  let contradiction_is = property_get(r2, "contradiction_is");
  let shared_is = property_get(r2, "shared_is");
  let depth_is = property_get(r2, "depth_is");
  let arbitrated = property_get(r2, "arbitrated");
  function unproved_is(row) {
    let verdict_unproved = property_equals(row, "verdict", "unproved");
    return verdict_unproved;
  }
  let depth = list_filter(arbitrated, depth_is);
  let shared = list_filter(arbitrated, shared_is);
  let contradiction = list_filter(arbitrated, contradiction_is);
  let unproved = list_filter(arbitrated, unproved_is);
  return {
    depth,
    shared,
    contradiction,
    unproved,
  };
}

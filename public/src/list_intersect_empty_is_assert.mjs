import { list_empty_is_assert } from "./list_empty_is_assert.mjs";
import { list_intersect } from "./list_intersect.mjs";
export function list_intersect_empty_is_assert(include, exclude) {
  let i = list_intersect(include, exclude);
  list_empty_is_assert(i, {
    include,
    exclude,
  });
}

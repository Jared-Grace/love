import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_intersect } from "./list_intersect.mjs";
export function list_intersect_empty_is_assert(include, exclude) {
  let i = list_intersect(include, exclude);
  list_empty_is_assert_json(i, {
    include,
    exclude,
  });
}

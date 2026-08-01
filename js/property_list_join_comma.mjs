import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
export function property_list_join_comma(object, property_name) {
  arguments_assert(arguments, 2);
  ("The list held under this name, written out as one line with commas between.");
  ("Nearly every reporter ends this way - reach in for the list of what went wrong,");
  ("then say it in a sentence - so the two lines travel together everywhere.");
  let value = property_get(object, property_name);
  let joined = list_join_comma(value);
  return joined;
}

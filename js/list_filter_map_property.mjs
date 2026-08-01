import { arguments_assert } from "./arguments_assert.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map_property } from "./list_map_property.mjs";
export function list_filter_map_property(list, keep_is, key) {
  arguments_assert(arguments, 3);
  ("The one thing wanted from each item that passes the test.");
  ("Eighteen places kept a list only to ask each of its items for the same field and");
  ("then never look at the list again, so the kept list had to be given a name that");
  ("meant nothing to anybody reading it. Naming the pair says the field was the");
  ("question.");
  let kept = list_filter(list, keep_is);
  let values = list_map_property(kept, key);
  return values;
}

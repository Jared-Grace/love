import { arguments_assert } from "./arguments_assert.mjs";
import { list_single } from "./list_single.mjs";
import { property_get } from "./property_get.mjs";
export function list_single_property(list, property_name) {
  arguments_assert(arguments, 2);
  ("One part of the one thing in a list.");
  ("Where a search or a filter is expected to leave exactly one thing behind and only");
  ("a single part of it is wanted, the thing itself is given a name that nothing else");
  ("ever reads. The count is still asserted, so a list of two still says so.");
  let only = list_single(list);
  let part = property_get(only, property_name);
  return part;
}

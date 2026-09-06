import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { js_object_property_key_name_or_null } from "./js_object_property_key_name_or_null.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
export function js_object_properties_offered_run_is(
  properties,
  start,
  keys,
  offered,
) {
  arguments_assert(arguments, 4);
  ("Whether the properties beginning at this one are exactly the given keys, in that order, each already written out as the very value offered under that name.");
  ("★ EVERY VALUE IS COMPARED, WHICH IS THE WHOLE PROOF THAT A FILE COLLAPSED ON THIS ANSWER GOES ON SAYING WHAT IT SAID. A property whose written-out word differs from what is offered is a property that means something else, and putting the shorter spelling there would change the answer while looking like tidying.");
  ("The run must sit together and in the given order. An object's later key wins over its earlier one, so a run broken up by something else, or written in another order, would come back in a different order after a collapse and could hand a different value to whoever reads the object.");
  let wanted = list_size(keys);
  let count = list_size(properties);
  let past = start + wanted;
  if (less_than(count, past)) {
    return false;
  }
  let at = 0;
  while (less_than(at, wanted)) {
    let one = properties[start + at];
    let key = js_object_property_key_name_or_null(one);
    let same = equal(key, keys[at]);
    if (not(same)) {
      return false;
    }
    let value_node = property_get(one, "value");
    let written = js_node_type_is(value_node, "Literal");
    if (not(written)) {
      return false;
    }
    let value = property_get(value_node, "value");
    let right = property_get(offered, key);
    let held = equal(value, right);
    if (not(held)) {
      return false;
    }
    at = at + 1;
  }
  return true;
}

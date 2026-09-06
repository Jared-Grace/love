import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
export function js_object_properties_spread_replaced(
  properties,
  start,
  wanted,
  spread,
) {
  arguments_assert(arguments, 4);
  ("The properties of an object literal with a run of them taken out and one spread put where the run began. Pure - a new list, and the nodes that survive are the same nodes.");
  ("The spread goes in at the run's own place rather than at either end, because an object's later key wins over its earlier one: moving the spread past a property that follows it would let that property's value be the one that survives, and the object would answer differently while looking tidier.");
  let after = [];
  let at = 0;
  let count = list_size(properties);
  while (less_than(at, count)) {
    let before_run = less_than(at, start);
    let inside = less_than(at, start + wanted);
    let past_run = not(inside);
    if (before_run || past_run) {
      list_add(after, properties[at]);
    }
    if (equal(at, start)) {
      list_add(after, spread);
    }
    at = at + 1;
  }
  return after;
}

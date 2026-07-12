import { arguments_assert } from "./arguments_assert.mjs";
import { property_set } from "./property_set.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_last } from "./list_last.mjs";
import { list_add } from "./list_add.mjs";
import { performance_now } from "./performance_now.mjs";
import { subtract } from "./subtract.mjs";
export function performance_next(p, category) {
  arguments_assert(arguments, 2);
  let time = performance_now();
  let delta = null;
  let e = list_empty_not_is(p);
  if (e) {
    let last = list_last(p);
    let time_previous = property_get(last, "time");
    delta = subtract(time, time_previous);
    property_set(last, "delta", delta);
  }
  list_add(p, {
    time,
    category,
  });
  return;
}

import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_last } from "../../../love/public/src/list_last.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { performance_now } from "../../../love/public/src/performance_now.mjs";
export function performance_next(p, category) {
  assert_arguments(arguments, 2);
  const time = performance_now();
  let delta = null;
  let e = list_empty_not_is(p);
  if (e) {
    let last = list_last(p);
    let time_previous = property_get(last, "time");
    delta = time - time_previous;
    object_property_set(last, "delta", delta);
  }
  list_add(p, {
    time,
    category,
  });
  return;
}

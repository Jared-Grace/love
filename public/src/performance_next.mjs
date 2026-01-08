import { list_empty_is } from "../../../love/public/src/list_empty_is.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_last } from "../../../love/public/src/list_last.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { performance_now } from "../../../love/public/src/performance_now.mjs";
export function performance_next(p, name) {
  marker("1");
  const time = performance_now();
  list_add(p, {
    time: time,
    name: name,
  });
  return;
  let delta = null;
  let e = list_empty_is(p);
  if (e) {
    delta = 0;
  } else {
    let last = list_last(p);
    let time_previous = object_property_get(last, "time");
    delta = time - time_previous;
  }
}

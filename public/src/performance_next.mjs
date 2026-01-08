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
  if (false) {
  }
}

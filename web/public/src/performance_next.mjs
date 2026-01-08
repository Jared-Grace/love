import { list_add } from "../../../love/public/src/list_add.mjs";
import { performance_now } from "../../../love/public/src/performance_now.mjs";
export function performance_next(name) {
  const start = performance_now();
  list_add(measurements, {
    time: start,
    name: name,
  });
  return start;
}

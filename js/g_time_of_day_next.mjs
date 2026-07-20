import { g_times } from "./g_times.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { add_1 } from "./add_1.mjs";
import { mod } from "./mod.mjs";
export function g_time_of_day_next(current) {
  "the next time of day after `current`, wrapping night→morning (a continuous day cycle driven by ministry)";
  let order = g_times();
  let i = list_index_of(order, current);
  let n = mod(add_1(i), list_size(order));
  let next = list_get(order, n);
  return next;
}

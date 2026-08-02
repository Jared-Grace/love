import { list_map_sum } from "./list_map_sum.mjs";
import { property_get } from "./property_get.mjs";
export function timings_total_ms(timings) {
  "How long the whole set took added up, in milliseconds.";
  "The ranking answers which one to make faster; this answers whether the set as a whole is worth attacking at all, and the two are read together. Leaving it out sent every reader who wanted it to the same hand-rolled sum over the printed lines - which is a sum of whatever the printing happened to show, rather than of what was measured.";
  function lambda_milliseconds(timing) {
    let milliseconds = property_get(timing, "milliseconds");
    return milliseconds;
  }
  let total = list_map_sum(timings, lambda_milliseconds);
  return total;
}

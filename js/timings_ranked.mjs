import { list_copy } from "./list_copy.mjs";
import { list_reverse } from "./list_reverse.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { property_get } from "./property_get.mjs";
export function timings_ranked(timings) {
  "The same timings, slowest first, as a new list.";
  "Slowest first because the only question anyone asks of these numbers is which one is eating the wait. Something that quietly grows from seconds to minutes is invisible in a pass-or-fail list, and the whole run stops finishing before anybody notices which part changed.";
  "A copy, so that ordering them for reading never reorders the caller's own list underneath it.";
  let sorted = list_copy(timings);
  function lambda_milliseconds(timing) {
    let milliseconds = property_get(timing, "milliseconds");
    return milliseconds;
  }
  list_sort_number_mapper(sorted, lambda_milliseconds);
  list_reverse(sorted);
  return sorted;
}

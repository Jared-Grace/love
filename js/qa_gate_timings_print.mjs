import { list_copy } from "./list_copy.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { list_reverse } from "./list_reverse.mjs";
import { property_get } from "./property_get.mjs";
import { log } from "./log.mjs";
export function qa_gate_timings_print(timings) {
  "Slowest first, because the only question anyone asks of these numbers is which";
  "gate is eating the wait. A gate that quietly grows from seconds to minutes is";
  "invisible in a pass-or-fail list, and the whole suite stops finishing before";
  "anybody notices which part changed.";
  let sorted = list_copy(timings);
  function lambda(timing) {
    let milliseconds = property_get(timing, "milliseconds");
    return milliseconds;
  }
  list_sort_number_mapper(sorted, lambda);
  list_reverse(sorted);
  log(qa_gate_timings_print.name, sorted);
}

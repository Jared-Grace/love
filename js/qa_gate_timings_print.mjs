import { arguments_assert } from "./arguments_assert.mjs";
import { qa_gate_timing_prefix } from "./qa_gate_timing_prefix.mjs";
import { timings_ranked } from "./timings_ranked.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function qa_gate_timings_print(timings) {
  "Says how long each gate took, slowest first, one marked line each";
  "One line per gate rather than the whole list written out, because the writing out is done by something that quietly leaves things out - past a hundred entries it says how many more there were instead of saying them, and past a certain length it cuts a word short. Neither can be told from the thing itself once it is read back, so a reading of it would be wrong in a way nothing could catch.";
  "Marked, because a share of the gates answers in the text it printed and that text holds everything else the share had to say as well. The marker is what lets these lines be found again among it.";
  arguments_assert(arguments, 1);
  let sorted = timings_ranked(timings);
  let prefix = qa_gate_timing_prefix();
  for (let timing of sorted) {
    let name = property_get(timing, "name");
    let milliseconds = property_get(timing, "milliseconds");
    let line = text_combine_multiple([prefix, name, ": ", milliseconds]);
    console.log(line);
  }
}

import { property_get } from "./property_get.mjs";
import { text_empty } from "./text_empty.mjs";
import { command_single_is } from "./command_single_is.mjs";
import { dispatcher_run_name } from "./dispatcher_run_name.mjs";
import { property_set } from "./property_set.mjs";
import { equal } from "./equal.mjs";
export function permission_rows_run_named(rows) {
  "Writes onto each ranked row the dispatcher function its sample command runs, or empty text where no rule naming a function would answer that row.";
  "Empty rather than absent, because a row that no grant reaches has to stay in the ranking. It cost the human the same minute as the rest, and dropping it would leave a report that reads as if everything expensive were grantable.";
  "A chain gets no name even when a dispatcher call sits inside it. Granting the function it names would not stop that prompt, so naming it there would put a candidate in front of the human that cannot pay off.";
  for (let row of rows) {
    let sample = property_get(row, "sample");
    let run_name = text_empty();
    ("a row grouped on something other than the command carries no command at all where the call was a file edit or a fetch, so the sample is asked whether it is text before it is read as one");
    let worded = equal(typeof sample, "string");
    if (worded) {
      let single = command_single_is(sample);
      if (single) {
        run_name = dispatcher_run_name(sample);
      }
    }
    property_set(row, "run_name", run_name);
  }
  return rows;
}

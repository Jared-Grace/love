import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { qa_gates_frozen_names_run } from "./qa_gates_frozen_names_run.mjs";
export async function qa_gates_frozen_names_comma_run(gate_names_comma) {
  "$plain gate_names_comma";
  "A few gates named in one run of words joined by commas, run inside the frozen copy, answering with the ones that complained there.";
  "IT IS THE DOOR FROM A COMMAND LINE AND NOTHING ELSE. A command line hands every argument over as text, so the set arrives as one string and a string walked one at a time hands back its letters rather than its names - which is not a small mistake, it is seventy-five one-letter gates that all complain and read like seventy-five findings.";
  "THE SPLITTING IS THE WHOLE OF IT, so anything asking from inside the repo already holds a list and should ask the runner itself rather than joining names up in order to have them taken apart again.";
  arguments_assert(arguments, 1);
  let gate_names = text_split_comma(gate_names_comma);
  let r = await qa_gates_frozen_names_run(gate_names);
  return r;
}

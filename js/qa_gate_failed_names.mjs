import { qa_gate_failed_halves } from "./qa_gate_failed_halves.mjs";
import { list_map } from "./list_map.mjs";
import { list_first } from "./list_first.mjs";
export function qa_gate_failed_names(output) {
  "The names of the gates that complained, read back out of what the run printed";
  "What is kept is the names and not the whole printing, because the printing runs to hundreds of lines and the question a reader has is which gates, with the reasons a re-run will give again";
  "A gate that was quiet the second time is left out, since it never had anything wrong with it to record";
  let all = qa_gate_failed_halves(output);
  let names = list_map(all, list_first);
  return names;
}

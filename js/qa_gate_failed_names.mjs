import { newline } from "./newline.mjs";
import { text_split } from "./text_split.mjs";
import { text_includes_not } from "./text_includes_not.mjs";
import { list_last } from "./list_last.mjs";
import { text_split_colon } from "./text_split_colon.mjs";
import { list_first } from "./list_first.mjs";
import { list_add } from "./list_add.mjs";
export function qa_gate_failed_names(output) {
  "The names of the gates that complained, read back out of what the run printed";
  "What is kept is the names and not the whole printing, because the printing runs to hundreds of lines and the question a reader has is which gates, with the reasons a re-run will give again";
  "A gate that was quiet the second time is left out, since it never had anything wrong with it to record";
  let prefix = "GATE FAILED  ";
  let separator = newline();
  let lines = text_split(output, separator);
  let names = [];
  for (let line of lines) {
    if (text_includes_not(line, prefix)) {
      continue;
    }
    let parts = text_split(line, prefix);
    let after = list_last(parts);
    let halves = text_split_colon(after);
    let name = list_first(halves);
    list_add(names, name);
  }
  return names;
}

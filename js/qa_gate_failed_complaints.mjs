import { newline } from "./newline.mjs";
import { text_split } from "./text_split.mjs";
import { text_includes_not } from "./text_includes_not.mjs";
import { list_last } from "./list_last.mjs";
import { text_split_colon } from "./text_split_colon.mjs";
import { list_slice } from "./list_slice.mjs";
import { list_join } from "./list_join.mjs";
import { list_add } from "./list_add.mjs";
export function qa_gate_failed_complaints(output) {
  "What each complaining gate actually said, read back out of what the run printed, without the gate's own name in front of it";
  "The name is dropped on purpose. Every gate is itself a function of this repo, so a complaint read whole would name the gate as one of the things at fault, and the reader would be pointed at whoever last edited the gate rather than at whoever wrote the thing it is complaining about.";
  "A colon inside the complaint is put back, because a gate that hands over a piece of its own reading has one in it more often than not.";
  let prefix = "GATE FAILED  ";
  let separator = newline();
  let lines = text_split(output, separator);
  let complaints = [];
  for (let line of lines) {
    if (text_includes_not(line, prefix)) {
      continue;
    }
    let parts = text_split(line, prefix);
    let after = list_last(parts);
    let halves = text_split_colon(after);
    let said = list_slice(halves, 1);
    let complaint = list_join(said, ":");
    list_add(complaints, complaint);
  }
  return complaints;
}

import { text_split_newline } from "./text_split_newline.mjs";
import { qa_gate_failed_prefix } from "./qa_gate_failed_prefix.mjs";
import { text_split } from "./text_split.mjs";
import { text_includes_not } from "./text_includes_not.mjs";
import { list_last } from "./list_last.mjs";
import { text_split_colon } from "./text_split_colon.mjs";
import { list_add } from "./list_add.mjs";
export function qa_gate_failed_halves(output) {
  "one entry per complaining line in what a gate run printed, each already split at its colons - the gate's own name first, and everything it said after that";
  "the two readings built on this asked for opposite halves of the same line and had";
  "the whole walk written out twice to reach them: find the marked lines, take what";
  "stands after the marker, cut at the colons. Only the choosing of a half ever";
  "differed, so that is all either of them says now.";
  "The halves are handed over uncut rather than rejoined, because what stands after";
  "the first colon may hold more colons of its own and only the caller knows whether";
  "to put them back.";
  let prefix = qa_gate_failed_prefix();
  let lines = text_split_newline(output);
  let all = [];
  for (let line of lines) {
    if (text_includes_not(line, prefix)) {
      continue;
    }
    let parts = text_split(line, prefix);
    let after = list_last(parts);
    let halves = text_split_colon(after);
    list_add(all, halves);
  }
  return all;
}

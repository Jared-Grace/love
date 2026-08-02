import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function gate_counts_log(passed, failed) {
  "The closing line a gate prints under its cases: how many passed, and how many did not.";
  "A blank line comes first so the count stands apart from the run of cases above it, which is the only reason it can be read at a glance in a page of output.";
  let line = text_combine_multiple(["\npass ", passed, "  fail ", failed]);
  console.log(line);
}

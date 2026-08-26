import { function_span_call_existing_inner } from "../../../js/function_span_call_existing_inner.mjs";
import { function_span_call_existing } from "../../../js/function_span_call_existing.mjs";
import { function_functionize_inner } from "../../../js/function_functionize_inner.mjs";
export const example = {
  fn: function_span_call_existing_inner.name,
  args: ["report_write", "list_unique", "list_size", "rows_summarize"],
  kind: "files",
  title: "Point a run folded inside a loop at a function that already writes it out",
  note: [
    "The twin of ",
    { fn: function_span_call_existing.name },
    ", and the one most duplicates actually need. A run duplicating a named ",
    "function is usually a few lines inside a loop over the things being read, ",
    "and the climbing twin addresses the top of the body — so the two ends here ",
    "would both resolve to the loop, the piece that came out would be the whole ",
    "loop, and the answer would always be no.",
    " ",
    "That refusal is invisible: the tree is put back untouched, so nothing is ",
    "red and nothing is different. The only sign is ",
    { code: "called_is: false" },
    ", which reads exactly like the honest refusal for a run that really is ",
    "different work. Measured 2026-08-26: three duplications in a row failed ",
    "this way and were read as a missing transform.",
    " ",
    "The ends are found where the names are actually written, the same way ",
    { fn: function_functionize_inner.name },
    " finds them. Both must stand in the same block, which for this one is the ",
    "ordinary case rather than a hurdle: the lines worth folding out of a loop ",
    "are the loop's own contents, side by side.",
  ],
  before: [
    {
      name: "report_write.mjs",
      source: `export function report_write(sources) {
  let totals = [];
  for (let source of sources) {
    let rows = list_unique(source);
    let total = list_size(rows);
    list_add(totals, total);
  }
  return totals;
}`,
    },
    {
      name: "rows_summarize.mjs",
      source: `export function rows_summarize(source) {
  arguments_assert(arguments, 1);
  let rows = list_unique(source);
  let total = list_size(rows);
  return total;
}`,
    },
  ],
  after: [
    {
      name: "report_write.mjs",
      source: `export function report_write(sources) {
  let totals = [];
  for (let source of sources) {
    let total = rows_summarize(source);
    list_add(totals, total);
  }
  return totals;
}`,
    },
    {
      name: "rows_summarize.mjs",
      source: `export function rows_summarize(source) {
  arguments_assert(arguments, 1);
  let rows = list_unique(source);
  let total = list_size(rows);
  return total;
}`,
    },
  ],
};

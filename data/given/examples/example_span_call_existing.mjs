import { function_span_call_existing } from "../../../js/function_span_call_existing.mjs";
import { function_functionize } from "../../../js/function_functionize.mjs";
export const example = {
  fn: function_span_call_existing.name,
  args: ["report_write", "list_unique", "list_size", "rows_summarize"],
  kind: "files",
  title: "Point a run of lines at a function that already writes them out",
  note: [
    "The commonest way a duplicate is born is that somebody wrote the lines ",
    "rather than finding the name. ",
    { fn: function_functionize.name },
    " could already cut the run out under a new name, but that leaves the new ",
    "name standing beside the old one forever. This cuts the run out, holds the ",
    "piece against ",
    { code: "rows_summarize" },
    ", and — because they are the same work — leaves the call and nothing else. ",
    "No alias, and no second name for work that already had one.",
    " ",
    "The two ends are addressed the same way that verb addresses them: by a name ",
    "written somewhere in the line, here ",
    { code: "list_unique" },
    " through ",
    { code: "list_size" },
    ".",
    " ",
    "The check at the top of ",
    { code: "rows_summarize" },
    " is counted as no difference. A run living inside a longer function was ",
    "checked once where that function began and never again, so the piece that ",
    "comes out carries no check of its own and would otherwise differ from every ",
    "function worth calling.",
  ],
  before: [
    {
      name: "report_write.mjs",
      source: `export function report_write(source) {
  let rows = list_unique(source);
  let total = list_size(rows);
  return total;
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
      source: `export function report_write(source) {
  let total = rows_summarize(source);
  return total;
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

import { js_selects_functionize } from "../../js/js_selects_functionize.mjs";
export const example = {
  fn: js_selects_functionize.name,
  args: ["report_write", "list_unique,list_size", "rows_summarize"],
  kind: "files",
  refuses: true,
  title: "Refuse to publish an extracted function under a name already in use",
  note: [
    "The same extraction as next door, into a folder where ",
    { code: "rows_summarize" },
    " already exists and does something else. Publishing writes the new function to a file of its own, and a file already at that name is written over, so the extraction would succeed and quietly take the place of a function nobody was touching. Asking first is the difference between a name collision and a deletion.",
    " ",
    "A refusal here has to leave both files alone. The span is cut out of ",
    { code: "report_write" },
    " before the new function is written, so a check made too late would leave the source already emptied of the lines it no longer has anywhere to put.",
  ],
  expectText: "refused — rows_summarize is already taken",
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
      source: `export function rows_summarize(rows) {
  return rows;
}`,
    },
  ],
};

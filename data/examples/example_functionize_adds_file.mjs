import { js_selects_functionize } from "../../js/js_selects_functionize.mjs";
import { js_selects_functionize_local } from "../../js/js_selects_functionize_local.mjs";
import { js_statement_find_call_named } from "../../js/js_statement_find_call_named.mjs";
export const example = {
  fn: js_selects_functionize.name,
  args: ["report_write", "rows_gather,rows_total", "rows_summarize"],
  kind: "files",
  title: "Extract a span into a function and publish it as its own file",
  note: [
    "The span is named by the calls at its two ends — ",
    { code: "rows_gather" },
    " through ",
    { code: "rows_total" },
    " — so any selector can reach them and nothing has to be written into the ",
    "code first to mark where the span begins and ends. What the new function ",
    "takes and hands back is inferred: ",
    { code: "rows" },
    " is still read below, so it comes back out.",
    " ",
    "The twin ",
    { fn: js_selects_functionize_local.name },
    " stops one step earlier and leaves the new function in the file it came ",
    "from. This one goes on to give it a file of its own, which is why the ",
    "before-and-after here is a whole folder rather than one source — the result ",
    "is a set of files, and a single before-and-after cannot say it.",
    " ",
    "That is the only thing that ever kept this verb undemonstrated. Not the ",
    "shape of the result, and not the sandbox: the publishing step asked where ",
    "the repo was and wrote there, so an example of it put a real file into the ",
    "source tree.",
  ],
  before: [
    {
      name: "report_write.mjs",
      source: `export function report_write(source) {
  let rows = rows_gather(source);
  let total = rows_total(rows);
  return { rows, total };
}`,
    },
  ],
  after: [
    {
      name: "report_write.mjs",
      source: `export function report_write(source) {
  let { rows, total } = rows_summarize(source);
  return { rows, total };
}`,
    },
    {
      name: "rows_summarize.mjs",
      source: `export function rows_summarize(source) {
  let rows = rows_gather(source);
  let total = rows_total(rows);
  return { rows, total };
}`,
    },
  ],
  select: js_statement_find_call_named.name,
};

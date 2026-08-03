import { js_selects_functionize } from "../../js/js_selects_functionize.mjs";
import { js_selects_functionize_local } from "../../js/js_selects_functionize_local.mjs";
export const example = {
  fn: js_selects_functionize.name,
  args: ["report_write", "list_unique,list_size", "rows_summarize"],
  kind: "files",
  title: "Extract a span into a function and publish it as its own file",
  note: [
    "The span is named by the calls at its two ends — ",
    { code: "list_unique" },
    " through ",
    { code: "list_size" },
    " — so any selector can reach them and nothing has to be written into the ",
    "code first to mark where the span begins and ends. What the new function ",
    "takes and hands back is inferred: ",
    { code: "source" },
    " is free so it goes in, and ",
    { code: "total" },
    " is still read below so it comes back out. The two calls do not become ",
    "parameters, because a name that is already a function of the repo is one ",
    "the new file can reach on its own.",
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
    "source tree and had to be thrown away.",
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

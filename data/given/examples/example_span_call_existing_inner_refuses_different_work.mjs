import { function_span_call_existing_inner } from "../../../js/function_span_call_existing_inner.mjs";
import { function_span_call_existing } from "../../../js/function_span_call_existing.mjs";
export const example = {
  fn: function_span_call_existing_inner.name,
  args: ["report_write", "list_unique", "list_size", "rows_sorted_size"],
  kind: "files",
  refuses: true,
  title: "Refuse a run inside a loop that does different work",
  note: [
    "Reaching inside a loop is the only thing this one does differently from ",
    { fn: function_span_call_existing.name },
    ", and the guard is the thing most easily lost in a change like that. So it is written down: the two ends are taken on the lines they are really written on, deep inside the loop, the piece that comes out is the loop's own contents rather than the loop, and that piece is still held against the whole of the named function.",
    " ",
    "The near miss is the case worth pinning. Both functions count how many rows there are; one asks for the rows with no repeats and the other for the rows in order, so the run reads like the name it is being pointed at and is not it. A run that plainly did something else would never have been named here.",
    " ",
    "Nothing is written before the two are held against each other, so the folder afterwards is the folder handed over — no half-cut holder, no scratch name left behind. The whole-repo command reaches the same verdict from the other side: it has already cut into a real file by then, so it puts the holder back from its own text and hands back a record saying nothing was changed.",
  ],
  expectText:
    "refused — the run came out as a function that does different work from rows_sorted_size",
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
      name: "rows_sorted_size.mjs",
      source: `export function rows_sorted_size(source) {
  arguments_assert(arguments, 1);
  let rows = list_sorted(source);
  let total = list_size(rows);
  return total;
}`,
    },
  ],
};

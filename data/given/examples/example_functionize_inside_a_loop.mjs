import { js_selects_functionize_local } from "../../js/js_selects_functionize_local.mjs";
import { js_statement_find_name_inner } from "../../js/js_statement_find_name_inner.mjs";
import { js_statement_find_call_named } from "../../js/js_statement_find_call_named.mjs";
export const example = {
  fn: js_selects_functionize_local.name,
  select: js_statement_find_name_inner.name,
  select_args_multiple: ["trimmed", "padded"],
  args: ["row_prepared"],
  kind: "transform",
  title: "Cut a run of lines out of the inside of a loop",
  note: [
    "The same cut as next door, addressed differently. The reader used here takes ",
    "the line a word is actually written on, however deep inside a loop or a ",
    "branch that is; its twin climbs to the top of the body first. On a function ",
    "whose size is all inside a loop the climbing reader can only address the ",
    { code: "for" },
    " line itself, so the cut wraps the loop whole and the size moves rather than ",
    "goes.",
    " ",
    "Nothing else about the cut changes. ",
    { code: "row" },
    " is read and not bound inside the run, so it goes in; ",
    { code: "padded" },
    " is still read by the line below, so it comes back out; ",
    { code: "text_trim" },
    " and ",
    { code: "text_pad" },
    " are repo functions, so they stay names rather than becoming parameters. ",
    "The line left behind is built from both ends and lands back inside the loop.",
    " ",
    "Both ends must stand in the same block, which inside a loop is the ordinary ",
    "case rather than a hurdle — the lines worth cutting out of one are its own ",
    "contents, side by side. A run that jumps out of itself is refused before ",
    "anything is written: a ",
    { code: "return" },
    " carried into the new function would go on returning, but from there, and ",
    "the caller would walk quietly on to the next line.",
    " ",
    "The address ",
    { fn: js_statement_find_call_named.name },
    " next door names a line by a call standing in it. A word reaches further: ",
    "the line a run starts on is usually an accumulator being opened, which has ",
    "no call in it at all.",
  ],
  before: `export function f(rows) {
  let out = [];
  for (let row of rows) {
    let trimmed = text_trim(row);
    let padded = text_pad(trimmed, 4);
    list_add(out, padded);
  }
  return out;
}`,
  after: `export function f(rows) {
  let out = [];
  for (let row of rows) {
    let padded = row_prepared(row);
    list_add(out, padded);
  }
  return out;
}
function row_prepared(row) {
  arguments_assert(arguments, 1);
  let trimmed = text_trim(row);
  let padded = text_pad(trimmed, 4);
  return padded;
}`,
};

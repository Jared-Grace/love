import { js_statement_find_call_named_index } from "../../js/js_statement_find_call_named_index.mjs";
import { js_statement_find_call_named } from "../../js/js_statement_find_call_named.mjs";
import { js_call_named_find_index } from "../../js/js_call_named_find_index.mjs";
import { js_statement_delete } from "../../js/js_statement_delete.mjs";
export const example = {
  fn: js_statement_delete.name,
  select: js_statement_find_call_named_index.name,
  select_args: ["html_style_margin_y", "1"],
  args: [],
  kind: "transform",
  title: "The same numbered address one level up, at the line",
  note: [
    "A call and the line holding it are two different addresses, and a verb ",
    "written for one cannot take the other. So each depth needs its own way of ",
    "saying which of several was meant: ",
    { fn: js_call_named_find_index.name },
    " hands back the call, this hands back the whole line — which is what a verb ",
    "that removes, wraps or moves a statement has to be given.",
    " ",
    "It is the numbered twin of ",
    { fn: js_statement_find_call_named.name },
    " and stands in exactly the same relation to it, so the pair of pairs is one ",
    "shape rather than four separate addresses to remember.",
    " ",
    "Deleting the second of two identical lines is the plainest use: the name is ",
    "the same in both, so nothing but the count can tell them apart.",
  ],
  before: `export function f(p, value) {
  html_style_margin_y(p, value);
  html_style_margin_y(p, value);
  return p;
}`,
  after: `export function f(p, value) {
  html_style_margin_y(p, value);
  return p;
}`,
};

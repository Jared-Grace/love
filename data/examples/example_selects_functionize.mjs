import { js_selects_functionize } from "../../js/js_selects_functionize.mjs";
import { js_statement_find_call_named } from "../../js/js_statement_find_call_named.mjs";
export const example = {
  fn: js_selects_functionize.name,
  select: js_statement_find_call_named.name,
  select_args_multiple: ["list_sort_text", "text_join"],
  args: ["names_joined"],
  kind: "transform",
  title: "Extract a span of lines into a function of its own",
  note: [
    "Two addresses naming a first and a last line, and everything between them ",
    "goes into a new function — parameters worked out from what the span reads, ",
    "a call left behind in its place. This is the edit the whole two-address half ",
    "of the seam exists for: one node cannot say where a span ends.",
    " ",
    "It is also what retired the marker system. Extracting used to mean writing ",
    "two ",
    { code: "marker()" },
    " calls into the code first, running a command, and taking them out again — a ",
    "session of commands per extraction, with a cursor kept between them that any ",
    "other conversation could move. Two selectors and one command say the same ",
    "thing and keep nothing between commands.",
  ],
  before: `export function f(ast) {
  let names = js_identifiers_names(ast);
  let sorted = list_sort_text(names);
  let joined = text_join(sorted);
  return joined;
}`,
  after: `export function f(ast) {
  let names = js_identifiers_names(ast);
  let joined = names_joined(names);
  return joined;
}

function names_joined(names) {
  let sorted = list_sort_text(names);
  let joined = text_join(sorted);
  return joined;
}`,
};

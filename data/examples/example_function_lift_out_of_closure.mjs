import { js_selects_function_lift } from "../../js/js_selects_function_lift.mjs";
import { js_function_nested_find_named } from "../../js/js_function_nested_find_named.mjs";
import { js_selects_functionize_local } from "../../js/js_selects_functionize_local.mjs";
export const example = {
  fn: js_selects_function_lift.name,
  select: js_function_nested_find_named.name,
  select_args: ["padded"],
  args: ["row_padded"],
  kind: "transform",
  title: "Lift a function written inside another one out to the top",
  note: [
    "A long function comes in three shapes, and this is the one a span cannot ",
    "reach: the work is folded inside a closure, and to a span a whole closure is ",
    "one statement. Cutting spans out of ",
    { code: "f" },
    " here would only ever move that one statement around.",
    " ",
    "What the closure reached out for becomes what it now receives. ",
    { code: "width" },
    " was read from the enclosing scope, so it turns into a parameter, and every ",
    "call is handed it in the same move — the definition and the calls travel ",
    "together, which is what makes this provable rather than hopeful. ",
    { code: "text_pad" },
    " is left alone: a name the repo already answers to is one the lifted ",
    "function can still reach from where it lands.",
    " ",
    "Two things it refuses instead of doing. A closure handed on as a value has ",
    "nowhere for the extra arguments to go — the mention is not a call, so ",
    "nothing there can be added to. And a closure that ",
    { code: "writes" },
    " to a name it closed over cannot become a parameter, because a parameter is ",
    "a copy: the write would go on happening and stop arriving. Both would parse, ",
    "import, and run wrong.",
    " ",
    "The twin ",
    { fn: js_selects_functionize_local.name },
    " covers the other two shapes, straight work and work inside a loop. ",
    "Between them the three are covered, and a cut that only moves size from one ",
    "name to another is not a payment — the closure lift is what actually pays ",
    "for a span cut that left a big nested function behind.",
  ],
  before: `export function f(rows) {
  let width = list_size(rows);
  let first = list_first(rows);
  function padded(row) {
    let out = text_pad(row, width);
    return out;
  }
  let shown = padded(first);
  return shown;
}`,
  after: `export function f(rows) {
  let width = list_size(rows);
  let first = list_first(rows);
  let shown = row_padded(first, width);
  return shown;
}
function row_padded(row, width) {
  arguments_assert(arguments, 2);
  let out = text_pad(row, width);
  return out;
}`,
};

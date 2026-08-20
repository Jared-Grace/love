import { js_selects_functionize_local } from "../../js/js_selects_functionize_local.mjs";
import { js_statement_find_name_body } from "../../js/js_statement_find_name_body.mjs";
export const example = {
  fn: js_selects_functionize_local.name,
  select: js_statement_find_name_body.name,
  select_args_multiple: ["kept", "joined"],
  args: ["rows_joined"],
  kind: "transform",
  title: "A name opened by a loop head inside the cut stays inside it",
  note: [
    "What the new function hands back is worked out from the names it brings into ",
    "being that the lines below still read. The subtlety is what counts as ",
    "bringing a name into being: only what the run binds at its own level, never ",
    "what a loop head or a nested block opens somewhere inside it.",
    " ",
    "Here ",
    { code: "row" },
    " is opened by a loop head inside the run, and the line below the run happens ",
    "to open a name spelled the same way. Read carelessly, those two look like one ",
    "name escaping from the run into the rest of the function, and the cut hands ",
    "it back: the new function ends by returning a name bound only inside its own ",
    "loop, and the line left behind receives a name nothing around it ever had.",
    " ",
    "It is the worst kind of wrong, because a cut is meant to be ",
    "behaviour-preserving and this one looks exactly like a clean extraction. ",
    "Both files load and read well. It stops only when the line is reached.",
    " ",
    { code: "joined" },
    " is the one name that really does escape, so it alone comes back — as a plain ",
    "value rather than an object, because there is only one of it.",
  ],
  before: `export function f(rows) {
  let kept = [];
  for (let row of rows) {
    list_add(kept, row);
  }
  let joined = list_join(kept);
  for (let row of rows) {
    console.log(row, joined);
  }
  return joined;
}`,
  after: `export function f(rows) {
  let joined = rows_joined(rows);
  for (let row of rows) {
    console.log(row, joined);
  }
  return joined;
}
function rows_joined(rows) {
  arguments_assert(arguments, 1);
  let kept = [];
  for (let row of rows) {
    list_add(kept, row);
  }
  let joined = list_join(kept);
  return joined;
}`,
};

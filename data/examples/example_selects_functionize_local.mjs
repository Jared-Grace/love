import { js_selects_functionize_local } from "../../js/js_selects_functionize_local.mjs";
import { js_statement_find_call_named } from "../../js/js_statement_find_call_named.mjs";
export const example = {
  fn: js_selects_functionize_local.name,
  select: js_statement_find_call_named.name,
  select_args_multiple: ["list_sort_text", "list_join"],
  args: ["names_joined"],
  kind: "transform",
  title: "Extract a span of lines into a function of its own",
  note: [
    "Two addresses naming a first and a last line, and everything between them ",
    "becomes a function. Nothing is written by hand: what the new function takes ",
    "is worked out from the names the span reads and does not bind, what it hands ",
    "back is worked out from what the lines below still read, and the call left ",
    "behind is built from both.",
    " ",
    "This is what retired the marker system. Extracting used to mean writing two ",
    { code: "marker()" },
    " calls into the code, running a command, and taking them out again — a ",
    "session of commands per extraction, with a cursor kept between them that any ",
    "other conversation could move. Two selectors and one command say the same ",
    "thing and keep nothing between commands.",
    " ",
    "The verb shown here is the half that stays inside one file. Its twin goes on ",
    "to move the new function into a file of its own, as this repo wants — and ",
    "that half writes into the repo's own folder wherever it is run from, so an ",
    "example of it wrote a real file into the source tree instead of into its ",
    "sandbox. Splitting the two is what finally put the thinking half under a ",
    "gate; the moving half is the same one every normalize run exercises.",
  ],
  before: `export function f(ast) {
  let names = js_identifiers_names(ast);
  let sorted = list_sort_text(names);
  let joined = list_join(sorted);
  return joined;
}`,
  after: `export function f(ast) {
  let names = js_identifiers_names(ast);
  let joined = names_joined(names);
  return joined;
}

function names_joined(names) {
  let sorted = list_sort_text(names);
  let joined = list_join(sorted);
  return joined;
}`,
};

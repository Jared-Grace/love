import { js_block_local_call_add } from "../../../js/js_block_local_call_add.mjs";
import { js_statement_wrap_guard } from "../../../js/js_statement_wrap_guard.mjs";
import { js_find_declaration_named } from "../../../js/js_find_declaration_named.mjs";
import { js_selects_guard_add_after } from "../../../js/js_selects_guard_add_after.mjs";
export const example = {
  fn: js_selects_guard_add_after.name,
  select: js_find_declaration_named.name,
  select_args: ["skip"],
  args: ["null_is", "skip", "taken", "null"],
  kind: "transform",
  title: "Write a bound guard under a chosen line, from four names",
  note: [
    "The guard that gets typed by hand in this repo binds its question to a name ",
    "first — ",
    { code: "let taken = null_is(skip); if (taken) { return null; }" },
    " — and neither half of that could be written by a verb. ",
    { fn: js_statement_wrap_guard.name },
    " turns a line that already holds a bare question into a guard, so it needs ",
    "the question to be standing there already. ",
    { fn: js_block_local_call_add.name },
    " binds a name to a call, but it fills the call's arguments out of what the ",
    "called function names its own parameters, and it writes at the end of a ",
    "block. A guard asks about a local the body is holding, at the line it has ",
    "just been bound on.",
    " ",
    "So the tested name is handed over here, and that one difference is the whole ",
    "reason this is its own verb. Four words go in and none of them may be a line ",
    "of code: each is dropped into a line, the line is parsed, and the tree is ",
    "read back before anything is written, so a word carrying a call or a second ",
    "statement stops at the parse and leaves the file as it was.",
    " ",
    "The way out is written before the binding. Both land one under the chosen ",
    "line, so writing the second one first pushes it down and leaves the two in ",
    "the order a guard reads in.",
  ],
  before: `export function f(state) {
  let skip = skip_or_null(state);
  work(state);
}`,
  after: `export function f(state) {
  let skip = skip_or_null(state);
  let taken = null_is(skip);
  if (taken) {
    return null;
  }
  work(state);
}`,
};

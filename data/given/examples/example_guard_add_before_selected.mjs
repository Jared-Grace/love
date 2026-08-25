import { js_selects_guard_add_after } from "../../../js/js_selects_guard_add_after.mjs";
import { js_statement_find_call_named } from "../../../js/js_statement_find_call_named.mjs";
import { js_selects_guard_add_before } from "../../../js/js_selects_guard_add_before.mjs";
export const example = {
  fn: js_selects_guard_add_before.name,
  select: js_statement_find_call_named.name,
  select_args: ["work"],
  args: ["null_is", "skip", "taken", "null"],
  kind: "transform",
  title: "Write a bound guard above a chosen line, from four names",
  note: [
    "A guard is put in to stop a line running, so the line worth choosing is ",
    "almost always the one being stopped. ",
    { fn: js_selects_guard_add_after.name },
    " asks for the line before that one instead, which is a name the reader has ",
    "to go and find for no reason of their own. This is the same four words ",
    "pointed at the line they are actually about.",
    " ",
    "The two lines go in the opposite order to the other half, and the reason is ",
    "worth holding onto. Where the chosen line sits is found again for each ",
    "write. Writing behind it never moves it, so there the way out goes first ",
    "and gets pushed down by the binding. Writing in front of it moves it every ",
    "time, so here the binding goes first and the chosen line carries the way out ",
    "down with it.",
    " ",
    "Four words go in and none of them may be a line of code: each is dropped ",
    "into a line, the line is parsed, and the tree is read back before anything ",
    "is written, so a word carrying a call or a second statement stops at the ",
    "parse and leaves the file as it was.",
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

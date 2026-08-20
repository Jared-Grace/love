import { js_statement_if_return_add } from "../../js/js_statement_if_return_add.mjs";
import { js_statement_find_call_named } from "../../js/js_statement_find_call_named.mjs";
import { js_statement_wrap_guard } from "../../js/js_statement_wrap_guard.mjs";
import { js_statement_wrap_if } from "../../js/js_statement_wrap_if.mjs";
export const example = {
  fn: js_statement_wrap_guard.name,
  select: js_statement_find_call_named.name,
  select_args: ["ready_not_is"],
  args: [],
  kind: "transform",
  title: "Turn a line into a guard in one command",
  note: [
    "A guard is one idea — ",
    { code: "if this, then stop here" },
    " — and it used to be two commands: ",
    { fn: js_statement_wrap_if.name },
    " and then ",
    { fn: js_statement_if_return_add.name },
    ".",
    " ",
    "The two were always run together and always in that order, and between them ",
    "the file holds a test with an empty body — a line that reads as a decision ",
    "and decides nothing. A peer's sweep can commit that state. A pairing that ",
    "close belongs in one command, and each half stays for the times only one of ",
    "them is wanted.",
    " ",
    "Wrapping puts the new node where the old one was rather than beside it, so ",
    "the selection still names the line after the first half — which is why the ",
    "second half needs no fresh address.",
  ],
  before: `export function f(state) {
  ready_not_is(state);
  work(state);
}`,
  after: `export function f(state) {
  if (ready_not_is(state)) {
    return;
  }
  work(state);
}`,
};

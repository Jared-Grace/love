import { js_array_identifier_move } from "../../js/js_array_identifier_move.mjs";
import { js_find_declaration_named } from "../../js/js_find_declaration_named.mjs";
import { js_array_text_move } from "../../js/js_array_text_move.mjs";
export const example = {
  fn: js_array_text_move.name,
  select: js_find_declaration_named.name,
  select_args: ["examples"],
  args: ["example_statement_duplicate", "example_wrap_call_in_if"],
  kind: "transform",
  title: "Move one entry of a reading order",
  note: [
    "A curriculum is an ordered register of written words, and its order is the ",
    "whole of what it says — an example placed after the one that builds on it ",
    "teaches nothing.",
    " ",
    "Reordering used to be remove-then-add: two commands for one change, and a ",
    "register briefly short an entry in between, which a peer's sweep can commit.",
    " ",
    "Nothing is rebuilt here. The entry that leaves is the entry that arrives, so ",
    "the moving itself knows nothing about words and is shared with ",
    { fn: js_array_identifier_move.name },
    ". What is left on each side is only the finding, which is the one half the ",
    "two kinds of register genuinely disagree about.",
  ],
  before: `export function f() {
  let examples = ["example_atomize_nested_call", "example_statement_duplicate", "example_wrap_call_in_if"];
  return examples;
}`,
  after: `export function f() {
  let examples = ["example_atomize_nested_call", "example_wrap_call_in_if", "example_statement_duplicate"];
  return examples;
}`,
};

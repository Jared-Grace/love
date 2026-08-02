import { js_selects_code_add_after } from "../../js/js_selects_code_add_after.mjs";
import { js_find_declaration_named } from "../../js/js_find_declaration_named.mjs";
import { js_block_body_add_code } from "../../js/js_block_body_add_code.mjs";
import { js_selects_prose_add_after } from "../../js/js_selects_prose_add_after.mjs";
export const example = {
  fn: js_selects_code_add_after.name,
  select: js_find_declaration_named.name,
  select_args: ["lines"],
  args: ["let counted = list_size(lines);"],
  kind: "transform",
  title: "Write a step between two particular lines",
  note: [
    "Written code could only ever land at one end of a block or the other: ",
    { fn: js_block_body_add_code.name },
    " puts it last and its sibling puts it first. Neither reaches the commonest ",
    "place of all — a value that has to be worked out after the line above it ",
    "and is read by the line below it.",
    " ",
    "This is the code half of ",
    { fn: js_selects_prose_add_after.name },
    ", and it is that same working-out asked to parse rather than to quote. The ",
    "address is any selector, so it reaches every line an address can name.",
    " ",
    "One statement only, because the address names one place and a second ",
    "statement would have nowhere of its own to be. A line of code holds commas ",
    "the moment it calls anything with two arguments, so this takes the ",
    "prompting code-carrying command rather than the splitting one.",
  ],
  before: `export function f(passage) {
  let lines = passage_lines(passage);
  return counted;
}`,
  after: `export function f(passage) {
  let lines = passage_lines(passage);
  let counted = list_size(lines);
  return counted;
}`,
};

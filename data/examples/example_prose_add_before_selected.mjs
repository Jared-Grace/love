import { js_selects_prose_add_before } from "../../js/js_selects_prose_add_before.mjs";
import { js_find_declaration_named } from "../../js/js_find_declaration_named.mjs";
import { js_selects_prose_add_after } from "../../js/js_selects_prose_add_after.mjs";
export const example = {
  fn: js_selects_prose_add_before.name,
  select: js_find_declaration_named.name,
  select_args: ["counted"],
  args: ["the count is what the caller asked for"],
  kind: "transform",
  title: "Explain the step that is coming next",
  note: [
    "The other side of the same gap. ",
    { fn: js_selects_prose_add_after.name },
    " reads as an account of the line just done; this one reads as an account ",
    "of the line about to happen, which is what a step whose reason is not ",
    "obvious from its own name wants above it.",
    " ",
    "Both directions exist because a gap has two neighbours and only one of them ",
    "may be nameable — the first line of a block has no line above it to select, ",
    "and the last has none below.",
  ],
  before: `export function f(passage) {
  let lines = passage_lines(passage);
  let counted = list_size(lines);
  return counted;
}`,
  after: `export function f(passage) {
  let lines = passage_lines(passage);
  "the count is what the caller asked for";
  let counted = list_size(lines);
  return counted;
}`,
};

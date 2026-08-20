import { js_selects_prose_add_after } from "../../js/js_selects_prose_add_after.mjs";
import { js_find_declaration_named } from "../../js/js_find_declaration_named.mjs";
import { js_block_prose_add } from "../../js/js_block_prose_add.mjs";
export const example = {
  fn: js_selects_prose_add_after.name,
  select: js_find_declaration_named.name,
  select_args: ["lines"],
  args: ["one entry for every line the passage runs to"],
  kind: "transform",
  title: "Explain one step, beside the step",
  note: [
    "An explanation here is a real statement rather than a stripped comment, so ",
    "it can sit anywhere a statement can. Only one place was ever reachable by ",
    "name: ",
    { fn: js_block_prose_add.name },
    " writes at the top of a block, which is where a function's account of ",
    "itself belongs and nowhere near the step being accounted for.",
    " ",
    "So a line explaining one working-out in the middle of a function was a hand ",
    "edit every time — the last thing left on an otherwise command-only path for ",
    "the shape a Claude writes most. The address is any selector, so the same ",
    "verb reaches every line an address can name.",
    " ",
    "One sentence, no comma and no full stop, for the same reason its older ",
    "relative asks: the splitter that hands a joined list of arguments over ",
    "would read either mark as the end of this argument.",
  ],
  before: `export function f(passage) {
  let lines = passage_lines(passage);
  let counted = list_size(lines);
  return counted;
}`,
  after: `export function f(passage) {
  let lines = passage_lines(passage);
  "one entry for every line the passage runs to";
  let counted = list_size(lines);
  return counted;
}`,
};

import { js_selects_move_after } from "../../js/js_selects_move_after.mjs";
export const example = {
  fn: js_selects_move_after.name,
  args: ["first", "doubled"],
  kind: "transform",
  title: "Move a line to sit after another line",
  note: [
    "The first example needing two addresses through the seam: one selector, run ",
    "once per name, and both nodes handed to the transform together. Here an ",
    "unrelated ",
    { code: "list_first" },
    " sits in the middle of a computation and is moved out from between the two ",
    "lines that belong together. Reordering is the only edit that can leave every ",
    "line untouched and still break the function, which is why ",
    { fn: js_selects_move_after.name },
    " is the one verb here carrying a guard — see the refusal that pairs with it.",
  ],
  before: `export function f(ast) {
  let sized = list_size(ast);
  let first = list_first(ast);
  let doubled = add(sized, sized);
  return doubled;
}`,
  after: `export function f(ast) {
  let sized = list_size(ast);
  let doubled = add(sized, sized);
  let first = list_first(ast);
  return doubled;
}`,
};

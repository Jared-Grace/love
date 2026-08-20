import { js_declarations_name_only_collapse } from "../../../js/js_declarations_name_only_collapse.mjs";
export const example = {
  fn: js_declarations_name_only_collapse.name,
  args: [],
  kind: "transform",
  title: "Drop a line that only gives a second name",
  note: [
    { fn: js_declarations_name_only_collapse.name },
    " takes out every ",
    { code: "let a = b;" },
    " and points what read ",
    { code: "a" },
    " at ",
    { code: "b" },
    ". The name kept is normally the one the value already had, but a word with a number counted into it loses to a word beside it without one — the number was handed out by a pass that needed the word not to clash, so it says which one this is and nothing else.",
  ],
  before: `export function f(a) {
  let total2 = g(a);
  let total = total2;
  return total;
}`,
  after: `export function f(a) {
  let total = g(a);
  return total;
}`,
};

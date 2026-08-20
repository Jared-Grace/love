import { js_block_body_add_code_first } from "../../js/js_block_body_add_code_first.mjs";
export const example = {
  fn: js_block_body_add_code_first.name,
  args: ["ready_is", "consequent", "log_starting()"],
  kind: "transform",
  title: "Add a statement at the start of the then-block",
  note: [
    "The same selector as the else-block example, pointed at the other slot — ",
    { code: "consequent" },
    " instead of ",
    { code: "alternate" },
    " — and the other verb, ",
    { fn: js_block_body_add_code_first.name },
    " instead of its appending pair. Two selectors times two verbs is four edits ",
    "from four small pieces, which is the whole reason the address is not one ",
    "fused argument.",
  ],
  before: `export function f(a) {
  if (ready_is(a)) {
    run(a);
  } else {
    wait(a);
  }
}`,
  after: `export function f(a) {
  if (ready_is(a)) {
    log_starting();
    run(a);
  } else {
    wait(a);
  }
}`,
};

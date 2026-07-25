import { js_block_body_add_code } from "../../js/js_block_body_add_code.mjs";
export const example = {
  fn: js_block_body_add_code.name,
  args: ["ready_is", "alternate", "log_missing()"],
  kind: "transform",
  title: "Add a statement at the end of the else-block",
  note: [
    "The address of an edit splits into two halves that never touch each other. ",
    "WHICH block is the selector's answer — here it descends from the if-statement ",
    "whose test calls ",
    { code: "ready_is" },
    " into its ",
    { code: "alternate" },
    " (the else-block). WHERE in that block is the verb: ",
    { fn: js_block_body_add_code.name },
    " appends, its paired ",
    { code: "js_block_body_add_code_first" },
    " prepends. Neither half knows about the other, so every selector works with ",
    "every transform written to this signature.",
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
    run(a);
  } else {
    wait(a);
    log_missing();
  }
}`,
};

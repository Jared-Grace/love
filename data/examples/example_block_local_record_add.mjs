import { js_block_local_record_add } from "../../js/js_block_local_record_add.mjs";
import { js_find_body_block } from "../../js/js_find_body_block.mjs";
import { js_block_local_list_add } from "../../js/js_block_local_list_add.mjs";
export const example = {
  fn: js_block_local_record_add.name,
  select: js_find_body_block.name,
  select_args: [],
  args: ["seen"],
  kind: "transform",
  title: "Open an empty record to gather into",
  note: [
    "One argument, because the starting value is the whole point and there is ",
    "only one empty record. What goes in afterwards is somebody else's line.",
    " ",
    "This is how a function that groups things opens: a record standing ready to ",
    "be filled by key. Its sibling ",
    { fn: js_block_local_list_add.name },
    " opens the same function when the gathering is ordered rather than named.",
  ],
  before: `export function f() {
  let names = ready_names();
}`,
  after: `export function f() {
  let names = ready_names();
  let seen = {};
}`,
};

import { js_block_local_text_add } from "../../js/js_block_local_text_add.mjs";
import { js_find_body_block } from "../../js/js_find_body_block.mjs";
import { js_block_local_number_add } from "../../js/js_block_local_number_add.mjs";
export const example = {
  fn: js_block_local_text_add.name,
  select: js_find_body_block.name,
  select_args: [],
  args: ["stage", "start"],
  kind: "transform",
  title: "Bind a name to one written word",
  note: [
    "The word arrives bare and leaves written — it is built as a written word ",
    "straight away rather than spelled into a line and read back, so there is no ",
    "point at which it could be taken for something to work out.",
    " ",
    "One comma-free word only, and no full stop either, because both are what the ",
    "argument splitter cuts on. A sentence cannot come through here; that is what ",
    "the prose verb is for.",
    " ",
    "The twin ",
    { fn: js_block_local_number_add.name },
    " takes a count. Which kind is wanted is said in the name rather than read ",
    "off the value, since a written five and a counted five look identical on a ",
    "command line and behave nothing alike.",
  ],
  before: `export function f() {
  let names = ready_names();
}`,
  after: `export function f() {
  let names = ready_names();
  let stage = "start";
}`,
};

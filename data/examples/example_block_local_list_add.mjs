import { js_block_local_list_add } from "../../js/js_block_local_list_add.mjs";
import { js_find_body_block } from "../../js/js_find_body_block.mjs";
import { js_array_identifier_add } from "../../js/js_array_identifier_add.mjs";
import { js_find_declaration_named } from "../../js/js_find_declaration_named.mjs";
export const example = {
  fn: js_block_local_list_add.name,
  select: js_find_body_block.name,
  select_args: [],
  args: ["found"],
  kind: "transform",
  title: "Open an empty list to gather into",
  note: [
    "The line a function opens with when it collects things in order, and the ",
    "one that pairs with everything else in the register family: once the list ",
    "exists, ",
    { fn: js_find_declaration_named.name },
    " reaches it by the name bound here and ",
    { fn: js_array_identifier_add.name },
    " and its kin fill it — so a whole ordered register can be built from names ",
    "alone, with nothing written by hand at any step.",
    " ",
    "That is worth more than the one line it saves. A list bound to a name is the ",
    "only address the register verbs have, so without this atom none of them ",
    "could be pointed at a list they had not been handed.",
  ],
  before: `export function f() {
  let names = ready_names();
}`,
  after: `export function f() {
  let names = ready_names();
  let found = [];
}`,
};

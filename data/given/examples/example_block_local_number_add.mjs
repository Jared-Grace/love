import { js_block_local_number_add } from "../../js/js_block_local_number_add.mjs";
import { js_find_body_block } from "../../js/js_find_body_block.mjs";
import { js_block_local_add_generic } from "../../js/js_block_local_add_generic.mjs";
import { function_select_apply_code } from "../../js/function_select_apply_code.mjs";
export const example = {
  fn: js_block_local_number_add.name,
  select: js_find_body_block.name,
  select_args: [],
  args: ["total", "0"],
  kind: "transform",
  title: "Open a tally at nothing",
  note: [
    "The first line of every function that counts something, and until this ",
    "family there was no verb for it at all — a starting value is not a call, so ",
    "none of the call-adding verbs could reach it, and writing one meant the ",
    "escape hatch ",
    { fn: function_select_apply_code.name },
    ", which asks the human every single time.",
    " ",
    "Whole numbers only. The splitter that carries arguments to a command breaks ",
    "on a full stop, so nothing else could have arrived here in one piece — which ",
    "is why the kind is in the name rather than guessed from the value.",
    " ",
    "All four of this family are ",
    { fn: js_block_local_add_generic.name },
    " wearing a different starting value, so the written code stays inside the ",
    "shared half and every wrapper's arguments stay plain enough to grant once.",
  ],
  before: `export function f() {
  let names = ready_names();
}`,
  after: `export function f() {
  let names = ready_names();
  let total = 0;
}`,
};

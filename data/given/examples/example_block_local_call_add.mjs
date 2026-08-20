import { js_block_local_call_add } from "../../../js/js_block_local_call_add.mjs";
import { js_find_body_block } from "../../../js/js_find_body_block.mjs";
import { js_block_call_add } from "../../../js/js_block_call_add.mjs";
import { js_block_local_text_add } from "../../../js/js_block_local_text_add.mjs";
import { js_call_argument_named_identifier_set } from "../../../js/js_call_argument_named_identifier_set.mjs";
export const example = {
  fn: js_block_local_call_add.name,
  select: js_find_body_block.name,
  select_args: [],
  args: ["body", "js_selects_block_body"],
  kind: "transform",
  title: "Bind a name to what a call hands back",
  note: [
    "The commonest line in the repo, and the one the naming vocabulary could not ",
    "write. Its five relatives — ",
    { fn: js_block_local_text_add.name },
    " and the rest — each bind a starting value written out in place, and every ",
    "one of those is a leaf. A body is mostly not leaves; it is a run of names ",
    "bound to what the last call answered.",
    " ",
    "Both halves already existed and neither knew about the other. ",
    { fn: js_block_call_add.name },
    " writes a call into a block with the arguments taken from the called ",
    "function's own parameters, so nothing arriving here is a line of code. This ",
    "puts that call in, lifts it straight back out, and hands it to the binder as ",
    "its value — so the argument filling, the import adding and the await ",
    "deciding are all done by the verb that already does them rather than done ",
    "again differently here.",
    " ",
    "The call brings its argument names from the called function's own ",
    "parameters, so the same uniquifier is at work here as next door: ",
    { code: "selects" },
    " is taken already, and what gets written is ",
    { code: "selects2" },
    " rather than a quiet read of a different value than the callee meant. ",
    { fn: js_call_argument_named_identifier_set.name },
    " is what points it at the one that was meant.",
  ],
  before: `export function f(selects) {
}`,
  after: `export function f(selects) {
  let body = js_selects_block_body(selects2);
}`,
};

import { js_block_local_boolean_add } from "../../../js/js_block_local_boolean_add.mjs";
import { js_find_body_block } from "../../../js/js_find_body_block.mjs";
import { js_block_local_text_add } from "../../../js/js_block_local_text_add.mjs";
export const example = {
  fn: js_block_local_boolean_add.name,
  select: js_find_body_block.name,
  select_args: [],
  args: ["found", "false"],
  kind: "transform",
  title: "Bind a name to a starting yes or no",
  note: [
    "The fifth starting value, beside a count, a word, an empty record and an ",
    "empty list. It is the line a flag decided over several steps opens with — ",
    "set one way here, and turned the other by whichever step finds the reason.",
    " ",
    "The word arrives as writing and must not stay writing. Its twin ",
    { fn: js_block_local_text_add.name },
    " wants exactly that and quotes what it is given; this one reads the word as ",
    "code and refuses anything that is not one of the two, so what lands in the ",
    "file is a value rather than a name nothing binds or a quoted word that is ",
    "always yes.",
  ],
  before: `export function f(names) {
  let size = list_size(names);
}`,
  after: `export function f(names) {
  let size = list_size(names);
  let found = false;
}`,
};

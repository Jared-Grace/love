import { arguments_assert } from "./arguments_assert.mjs";
import { js_functionize } from "./js_functionize.mjs";
import { js_selects_pair_same_block } from "./js_selects_pair_same_block.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
import { subtract_1 } from "./subtract_1.mjs";
export async function js_selects_functionize_rest(ast, selects, f_name_new) {
  arguments_assert(arguments, 3);
  ("Pulls everything from the first chosen statement through the end of the block it stands in out into a function of its own, so only where the run begins has to be chosen.");
  ("The third of the ways a run can be asked for, and the one the other two cannot reach: the last block of a body has no line after it to be asked for as everything before, and its own closing line is nearly always a call reusing a name introduced further up, which cannot be pointed at either. Every function that ends in a block of work has this shape, so it is the commonest run in the repo that had no address at all.");
  ("Where the run ends is not chosen and so cannot be got wrong. That is worth more than it sounds: the end of a body is a fact about the code rather than a word somebody typed, so it goes on being right after a peer edits the lines in between.");
  let pair = js_selects_pair_same_block(
    ast,
    selects,
    "The chosen statement was expected to stand in a block of its own. Would you like to check that the name given is written at the top level of the function's body?",
  );
  let body_from = property_get(pair, "body");
  let index_from = property_get(pair, "index_from");
  let count = list_size(body_from);
  let index_to = subtract_1(count);
  await js_functionize(ast, f_name_new, body_from, index_from, index_to);
}

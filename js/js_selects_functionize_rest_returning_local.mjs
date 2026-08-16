import { arguments_assert } from "./arguments_assert.mjs";
import { js_flo_body } from "./js_flo_body.mjs";
import { js_functionize_local_returning } from "./js_functionize_local_returning.mjs";
import { js_selects_pair_same_block } from "./js_selects_pair_same_block.mjs";
import { assert_message } from "./assert_message.mjs";
import { equal } from "./equal.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
import { subtract_1 } from "./subtract_1.mjs";
export async function js_selects_functionize_rest_returning_local(
  ast,
  selects,
  f_name_new,
) {
  arguments_assert(arguments, 3);
  ("Pulls everything from the chosen statement through the last line of the function out into a function of its own, carrying its returns with it, and leaves it standing in the same file beside the one it came out of.");
  ("The twin next door goes on to move it into a file of its own, which is what the repo wants and what a sandbox cannot watch - the moving half writes into the repo's own folder wherever it is run from. This half touches one file, and it is the half where all the thinking is.");
  ("What makes carrying the returns exact: the run reaches the last line of the function, so there is no next line for the calling line to carry on to, and the call hands back whatever the new function hands back. The plain cutter is right to refuse a return anywhere else.");
  ("That is checked rather than trusted. A run closing an inner block - the tail of an if, the tail of a loop - has lines after it that a return was skipping, and the calling line would go on to run them. Standing at the top level of the function's own body is what rules that out, and it is a fact about the code rather than a promise from whoever asked.");
  let pair = js_selects_pair_same_block(
    ast,
    selects,
    "The chosen statement was expected to stand in a block of its own. Would you like to check that the name given is written at the top level of the function's body?",
  );
  let body_from = property_get(pair, "body");
  let body_function = js_flo_body(ast);
  let own_body = equal(body_from, body_function);
  assert_message(
    own_body,
    "The chosen line stands inside a block within the function rather than at the top level of its body, so the run does not reach the last line of the function and a return in it would still be skipping lines the calling line would run. Would you like to choose a line at the top level of the body, or to use the cutter that refuses returns?",
  );
  let index_from = property_get(pair, "index_from");
  let count = list_size(body_from);
  let index_to = subtract_1(count);
  let indices = [index_from, index_to];
  await js_functionize_local_returning(body_from, indices, f_name_new, ast);
}

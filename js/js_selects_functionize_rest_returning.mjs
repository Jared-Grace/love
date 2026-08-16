import { arguments_assert } from "./arguments_assert.mjs";
import { js_flo_body } from "./js_flo_body.mjs";
import { js_functionize_returning } from "./js_functionize_returning.mjs";
import { js_selects_pair_same_block } from "./js_selects_pair_same_block.mjs";
import { assert_message } from "./assert_message.mjs";
import { equal } from "./equal.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
import { subtract_1 } from "./subtract_1.mjs";
export async function js_selects_functionize_rest_returning(
  ast,
  selects,
  f_name_new,
) {
  arguments_assert(arguments, 3);
  ("Pulls everything from the first chosen statement through the last line of the function out into a function of its own, carrying its returns with it, and leaves behind a line that calls it and hands its answer back.");
  ("The twin of the plain one, for the shape it cannot take: a function that ends in a run of decisions, each one answering and returning. That is one of the commonest long bodies here and the plain cutter refuses every one of them, because a return that moved into a called function would return from there and let the caller carry on. Returning the call is what makes the move exact.");
  ("It is only exact where the run really reaches the last line of the function, so that is checked rather than trusted. A run closing an inner block - the tail of an if, the tail of a loop - has lines after it that a return was skipping, and the calling line would go on to run them. Standing at the top level of the function's own body is what rules that out, and it is a fact about the code rather than a promise from whoever asked.");
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
  await js_functionize_returning(
    ast,
    f_name_new,
    body_from,
    index_from,
    index_to,
  );
}

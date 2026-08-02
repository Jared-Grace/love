import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_block_body_get } from "./js_block_body_get.mjs";
import { list_last_or_null } from "./list_last_or_null.mjs";
import { list_remove_last } from "./list_remove_last.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
export function js_function_return_empty_last_remove(node) {
  arguments_assert(arguments, 1);
  ("Takes the empty return off the end of one function, where it says nothing that");
  ("falling off the end does not already say.");
  ("Behaviour-preserving with no reading of the code at all: a function that runs");
  ("out of statements answers the same as one that leaves by an empty return, so");
  ("there is no argument to have about a particular case.");
  ("Only the very last statement counts, and that is the whole of the care needed.");
  ("An empty return anywhere else is a real early exit - the one inside an if is");
  ("the commonest line in the repo - and a rule that read a block instead of a");
  ("function body would delete those and change what runs.");
  let block = property_get(node, "body");
  let block_is = js_node_type_is(block, "BlockStatement");
  if (not(block_is)) {
    ("An arrow written as one expression has no body to end.");
    return;
  }
  let statements = js_block_body_get(block);
  let last = list_last_or_null(statements);
  let returns = js_node_type_is(last, "ReturnStatement");
  if (not(returns)) {
    return;
  }
  let argument = property_get(last, "argument");
  let empty_is = null_is(argument);
  if (not(empty_is)) {
    return;
  }
  list_remove_last(statements);
}

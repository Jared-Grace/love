import { arguments_assert } from "./arguments_assert.mjs";
import { js_block_body_get } from "./js_block_body_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_is } from "./list_is.mjs";
import { null_is } from "./null_is.mjs";
export function js_statement_run_or_null(held) {
  "The run of statements a statement holds under one of its own properties, whatever shape that property was written in - or nothing, where the property holds no statements at all.";
  "THE SAME RUN IS WRITTEN FOUR WAYS AND MEANS THE SAME THING EACH TIME. A body under a loop is a block; the body of a block is already a list; a catch stands between its holder and its block; and a branch written without braces is one bare statement standing where a run would. A reader that only knows one of those shapes silently finds nothing in the other three, which reads exactly like a statement that changed nowhere.";
  "AN ABSENT PROPERTY IS NOTHING RATHER THAN AN EMPTY RUN. An if with no else and an if with an empty else are different code, and answering the same for both would let a branch be added or taken away without anything noticing.";
  arguments_assert(arguments, 1);
  let missing = null_is(held);
  if (missing) {
    return null;
  }
  let listed = list_is(held);
  if (listed) {
    return held;
  }
  let caught = js_node_type_is(held, "CatchClause");
  if (caught) {
    let block = property_get(held, "body");
    let r = js_block_body_get(block);
    return r;
  }
  let blocked = js_node_type_is(held, "BlockStatement");
  if (blocked) {
    let r2 = js_block_body_get(held);
    return r2;
  }
  let r3 = [held];
  return r3;
}

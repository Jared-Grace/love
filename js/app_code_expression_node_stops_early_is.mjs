import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_node_logical_is } from "./app_code_expression_node_logical_is.mjs";
import { property_get_or } from "./property_get_or.mjs";
export function app_code_expression_node_stops_early_is(item) {
  arguments_assert(arguments, 1);
  ("whether item is an && or an || a lesson marked to be read as JavaScript reads it: its left side first, and its right side only if the left has not already decided the answer");
  ("2026-10-17, at the human's asking: the lesson on stopping early marks its own lines, and every other lesson goes on solving both sides of an && or an || first, the beginner's rule that comes to the same answer. A mark on the line rather than a choice handed down the solver, because everything that reads the order of a line - the presses, the worked example, the value - reads it from the line, so all of them follow the mark at once. Not picked: a choice handed to the solver, which every one of those readers would have to be handed too, and one forgotten would teach the other order");
  let logical = app_code_expression_node_logical_is(item);
  if (logical) {
    let marked = property_get_or(item, "stops_early", false);
    return marked;
  }
  return false;
}

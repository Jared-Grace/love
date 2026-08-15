import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_statements_work } from "./js_node_statements_work.mjs";
import { list_size } from "./list_size.mjs";
export function js_node_statements_work_size(node) {
  arguments_assert(arguments, 1);
  ("How many lines of work sit anywhere inside this piece of code.");
  ("The number rather than the lines, so that it can be handed to whatever picks the biggest of several pieces without each caller writing the counting out again.");
  let work = js_node_statements_work(node);
  let size = list_size(work);
  return size;
}

import { functions_asts_each } from "./functions_asts_each.mjs";
import { js_node_types_count_add } from "./js_node_types_count_add.mjs";
export async function functions_node_types_count() {
  ("Every kind of node in every function that exists, counted. This is the measure");
  ("behind asking whether the transforms can build anything worth building: the");
  ("code already written is the honest list of what a builder has to be able to");
  ("make, and it was written without this question in mind.");
  let counts = {};
  async function lambda(ast) {
    js_node_types_count_add(ast, counts);
  }
  await functions_asts_each(lambda);
  return counts;
}

import { app_a_function_node_replace } from "./app_a_function_node_replace.mjs";
export function app_a_function_node_child_parent(
  a,
  node_replacement,
  parent_replacement,
) {
  let replacements = {
    node: node_replacement,
    parent: parent_replacement,
  };
  app_a_function_node_replace(a, replacements);
}

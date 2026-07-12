import { app_a_function_node_replace } from "./app_a_function_node_replace.mjs";
export function app_a_function_node_child(a, node_replacement) {
  let replacements = {
    node: node_replacement,
  };
  let v = app_a_function_node_replace(a, replacements);
  return v;
}

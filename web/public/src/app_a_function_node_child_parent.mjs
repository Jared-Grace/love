import { app_a_function_node_replace } from "../../../love/public/src/app_a_function_node_replace.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function app_a_function_node_child_parent(a, node_replacement) {
  marker("1");
  const replacements = {
    node: node_replacement,
    parent: parent_replacement,
  };
  app_a_function_node_replace(a, replacements);
}

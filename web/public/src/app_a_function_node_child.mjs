import { marker } from "../../../love/public/src/marker.mjs";
import { app_a_function_node } from "../../../love/public/src/app_a_function_node.mjs";
import { object_copy_assign } from "../../../love/public/src/object_copy_assign.mjs";
export function app_a_function_node_child(a, node_replacement) {
  marker("1");
  const replacements = {
    node: node_replacement,
  };
  let a2 = object_copy_assign(a, replacements);
  app_a_function_node(a2);
}

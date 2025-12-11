import { app_a_function_node } from "../../../love/public/src/app_a_function_node.mjs";
import { object_copy_assign } from "../../../love/public/src/object_copy_assign.mjs";
export function app_a_function_node_replace(a, b) {
  let a2 = object_copy_assign(a, {
    node: b,
  });
  app_a_function_node(a2);
}

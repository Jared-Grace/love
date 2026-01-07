import { app_a_function_node } from "../../../love/public/src/app_a_function_node.mjs";
import { object_copy_assign } from "../../../love/public/src/object_copy_assign.mjs";
export async function app_a_function_node_replace(a, replacements) {
  let a2 = object_copy_assign(a, replacements);
  await app_a_function_node(a2);
}

import { function_dependencies } from "./function_dependencies.mjs";
export async function function_dependencies_single(f_name) {
  "Every function one named function reaches through its imports, directly or at any remove, for the common case of asking about a single one.";
  let r = await function_dependencies([f_name]);
  return r;
}

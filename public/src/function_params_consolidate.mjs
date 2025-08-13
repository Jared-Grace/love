import { function_transform } from "./function_transform.mjs";
export async function function_params_consolidate() {
  async function lambda(ast) {}
  let result = await function_transform(f_name, lambda);
}

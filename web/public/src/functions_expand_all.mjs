import { function_transform } from "../../../love/public/src/function_transform.mjs";
export async function functions_expand_all() {
  async function lambda(ast) {}
  let output = await function_transform(f_name, lambda);
}

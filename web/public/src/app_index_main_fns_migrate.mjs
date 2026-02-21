import { function_transform } from "../../../love/public/src/function_transform.mjs";
export async function app_index_main_fns_migrate() {
  async function lambda(ast) {}
  let output = await function_transform(f_name, lambda);
}

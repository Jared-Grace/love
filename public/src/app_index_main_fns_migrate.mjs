import { app_index_main_fns } from "../../../love/public/src/app_index_main_fns.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
export async function app_index_main_fns_migrate() {
  async function lambda(ast) {}
  let output = await function_transform(app_index_main_fns.name, lambda);
}

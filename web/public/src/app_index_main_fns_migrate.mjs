import { function_transform_fn } from "../../../love/public/src/function_transform_fn.mjs";
import { app_index_main_fns } from "../../../love/public/src/app_index_main_fns.mjs";
export async function app_index_main_fns_migrate() {
  async function lambda(ast) {}
  let output = await function_transform_fn(app_index_main_fns, lambda);
}

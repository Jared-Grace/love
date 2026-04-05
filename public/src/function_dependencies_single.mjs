import { function_dependencies } from "../../../love/public/src/function_dependencies.mjs";
export async function function_dependencies_single(f_name) {
  let r = await function_dependencies([f_name]);
  return r;
}

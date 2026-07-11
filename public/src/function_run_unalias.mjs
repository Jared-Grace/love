import { function_import_unalias } from "../../../love/public/src/function_import_unalias.mjs";
export async function function_run_unalias(f_name, args) {
  let fn = await function_import_unalias(f_name);
  let result = await fn(...args);
  return result;
}

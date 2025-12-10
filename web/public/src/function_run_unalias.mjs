import { marker } from "../../../love/public/src/marker.mjs";
import { function_import } from "../../../love/public/src/function_import.mjs";
export async function function_run_unalias(f_name, args) {
  marker("1");
  const fn = await function_import(f_name);
  const result = await fn(...args);
  return result;
}

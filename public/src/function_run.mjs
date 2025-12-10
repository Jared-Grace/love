import { function_import } from "../../../love/public/src/function_import.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_run(f_name, args) {
  marker("1");
  const fn = await function_import(f_name);
  const result = await fn(...args);
  return result;
}

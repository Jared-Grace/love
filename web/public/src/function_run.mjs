import { marker } from "../../../love/public/src/marker.mjs";
import { function_import_unalias } from "../../../love/public/src/function_import_unalias.mjs";
export async function function_run(f_name, args) {
  marker("1");
  const fn = await function_import_unalias(f_name);
  const result = await fn(...args);
  return result;
}

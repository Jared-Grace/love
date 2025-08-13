import { function_import } from "./function_import.mjs";
export async function function_run(f_name, args) {
  const fn = await function_import(f_name);
  const result = await fn(...args);
  return result;
}

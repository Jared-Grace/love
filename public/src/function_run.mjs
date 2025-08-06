import { function_import } from "./function_import.mjs";

export async function function_run(funcName, args) {
  const fn = await function_import(funcName);

  const result = await fn(...args);
  return result;
}

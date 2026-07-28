import { function_auto } from "./function_auto.mjs";
import { function_auto_check } from "./function_auto_check.mjs";
export async function function_auto_checked(f_name) {
  let result = await function_auto(f_name);
  let r = await function_auto_check(f_name2);
}

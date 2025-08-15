import { log } from "./log.mjs";
import { function_exists } from "./function_exists.mjs";
import { function_delete } from "./function_delete.mjs";
import { file_exists } from "./file_exists.mjs";
export async function function_delete_if_exists(f_name) {
  const exists = await function_exists(f_name);
  if (exists) {
    await function_delete(f_name);
  }
}

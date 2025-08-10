import { function_exists } from "./function_exists.mjs";
import { function_delete } from "./function_delete.mjs";
import { file_exists } from "./file_exists.mjs";
export async function function_delete_if_exists(n) {
  if (await function_exists(n)) {
    await function_delete(n);
  }
}

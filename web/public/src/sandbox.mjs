import { function_delete_if_exists } from "../../../love/public/src/function_delete_if_exists.mjs";
export async function sandbox() {
  await function_delete_if_exists(f_name);
}

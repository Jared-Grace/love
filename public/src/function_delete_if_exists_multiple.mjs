import { function_delete_if_exists } from "../../../love/public/src/function_delete_if_exists.mjs";
import { each_unordered_async } from "../../../love/public/src/each_unordered_async.mjs";
export async function function_delete_if_exists_multiple(fns) {
  await each_unordered_async(fns, function_delete_if_exists);
}

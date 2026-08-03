import { function_delete_if_exists } from "./function_delete_if_exists.mjs";
import { each_unordered_async } from "./each_unordered_async.mjs";
export async function function_delete_if_exists_multiple(fns) {
  "Removes each of the named functions that is actually there, passing over any name nothing answers to rather than refusing.";
  await each_unordered_async(fns, function_delete_if_exists);
}

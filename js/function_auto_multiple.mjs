import { each_unordered_async } from "./each_unordered_async.mjs";
import { function_auto } from "./function_auto.mjs";
export async function function_auto_multiple(list) {
  await each_unordered_async(list, function_auto);
}

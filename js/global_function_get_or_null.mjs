import { global_get } from "./global_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
export function global_function_get_or_null(fn) {
  "What has been put aside under one function's own name, or nothing at all when no one has put anything there.";
  "Its neighbour refuses a name nothing was stored under, which is right when the caller knows the thing is there and a miss is a fault. This is for the other case: a function asking whether something was left for it, where finding nothing is an ordinary answer and the function carries on with what it always did.";
  "Written for the words on the screen. A word that has been said in the reader's language is waiting here under the name of the function that asks for it, and one that has not been said yet is simply absent - which must read as absent rather than stop the screen being drawn.";
  let global = global_get();
  let value = property_get_or_null(global, fn.name);
  return value;
}

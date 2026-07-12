import { storage_local_enable_set } from "./storage_local_enable_set.mjs";
export function storage_local_disable(context) {
  let v = false;
  let dictionary = storage_local_enable_set(v, context);
  return dictionary;
}

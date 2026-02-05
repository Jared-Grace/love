import { storage_local_enable_set } from "../../../love/public/src/storage_local_enable_set.mjs";
export function storage_local_disable(context) {
  const v = false;
  let dictionary = storage_local_enable_set(v, context);
  return dictionary;
}

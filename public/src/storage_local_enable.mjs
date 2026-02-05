import { storage_local_enable_set } from "../../../love/public/src/storage_local_enable_set.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function storage_local_enable(context) {
  const v = true;
  let dictionary = storage_local_enable_set(v, context);
  return dictionary;
}

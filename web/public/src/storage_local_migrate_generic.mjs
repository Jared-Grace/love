import { storage_local_keys_values } from "../../../love/public/src/storage_local_keys_values.mjs";
import { each_object } from "../../../love/public/src/each_object.mjs";
import { storage_local_set_context } from "../../../love/public/src/storage_local_set_context.mjs";
export function storage_local_migrate_generic(context, keys) {
  let dictionary = storage_local_keys_values(context, keys);
  let migrate = function lambda3() {
    function lambda8(value, key) {
      storage_local_set_context(context, key, value);
    }
    each_object(dictionary, lambda8);
  };
  return migrate;
}

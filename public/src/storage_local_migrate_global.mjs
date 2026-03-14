import { storage_local_keys_global_context } from "../../../love/public/src/storage_local_keys_global_context.mjs";
import { storage_local_migrate_generic } from "../../../love/public/src/storage_local_migrate_generic.mjs";
export function storage_local_migrate_global(context) {
  let keys = storage_local_keys_global_context(context);
  let migrate = storage_local_migrate_generic(context, keys);
  return migrate;
}

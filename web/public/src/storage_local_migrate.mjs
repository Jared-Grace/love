import { storage_local_migrate_generic } from "../../../love/public/src/storage_local_migrate_generic.mjs";
import { storage_local_keys_browser_context } from "../../../love/public/src/storage_local_keys_browser_context.mjs";
export function storage_local_migrate(context) {
  let keys = storage_local_keys_browser_context(context);
  let migrate = storage_local_migrate_generic(context, keys);
  return migrate;
}

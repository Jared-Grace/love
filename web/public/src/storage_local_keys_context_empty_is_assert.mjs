import { list_empty_is_assert } from "../../../love/public/src/list_empty_is_assert.mjs";
import { storage_local_keys_context } from "../../../love/public/src/storage_local_keys_context.mjs";
export function storage_local_keys_context_empty_is_assert(context) {
  let keys = storage_local_keys_context(context);
  list_empty_is_assert(keys);
}

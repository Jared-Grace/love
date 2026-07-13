import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { storage_local_keys_context } from "./storage_local_keys_context.mjs";
export function storage_local_keys_context_empty_is_assert(context) {
  let keys = storage_local_keys_context(context);
  list_empty_is_assert_json(keys, {
    hint: "the context's storage keys should already be empty here — was something left set?",
    context,
  });
}

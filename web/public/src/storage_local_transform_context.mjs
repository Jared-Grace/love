import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { undefined_not_is_assert } from "../../../love/public/src/undefined_not_is_assert.mjs";
import { storage_local_set_context } from "../../../love/public/src/storage_local_set_context.mjs";
import { storage_local_initialize_context } from "../../../love/public/src/storage_local_initialize_context.mjs";
export function storage_local_transform_context(
  context,
  key,
  value_initial,
  lambda$value,
) {
  assert_arguments(arguments, 4);
  let value = storage_local_initialize_context(context, key, value_initial);
  let value_new = lambda$value(value);
  undefined_not_is_assert(value_new);
  storage_local_set_context(context, key, value_new);
}

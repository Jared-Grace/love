import { arguments_assert } from "./arguments_assert.mjs";
import { undefined_not_is_assert_json } from "./undefined_not_is_assert_json.mjs";
import { storage_session_set_context } from "./storage_session_set_context.mjs";
import { storage_session_initialize_context } from "./storage_session_initialize_context.mjs";
export function storage_session_transform_context(
  context,
  key,
  value_initial,
  lambda$value,
) {
  arguments_assert(arguments, 4);
  let value = storage_session_initialize_context(context, key, value_initial);
  let value_new = lambda$value(value);
  undefined_not_is_assert_json(value_new, {
    hint: "the transform should return a value, not undefined — did the lambda forget to return?",
    key,
  });
  storage_session_set_context(context, key, value_new);
}

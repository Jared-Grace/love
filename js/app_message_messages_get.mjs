import { arguments_assert } from "./arguments_assert.mjs";
import { storage_local_initialize_context } from "./storage_local_initialize_context.mjs";
export function app_message_messages_get(context, messages_property) {
  arguments_assert(arguments, 2);
  let value = storage_local_initialize_context(context, messages_property, []);
  return value;
}

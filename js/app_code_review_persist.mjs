import { arguments_assert } from "./arguments_assert.mjs";
import { storage_local_set_context } from "./storage_local_set_context.mjs";
export function app_code_review_persist(context, key, passed, queue) {
  arguments_assert(arguments, 4);
  let state = {
    passed,
    seeds: queue,
  };
  storage_local_set_context(context, key, state);
}

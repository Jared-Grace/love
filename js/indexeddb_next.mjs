import { global_function_set } from "./global_function_set.mjs";
import { invoke } from "./invoke.mjs";
import { global_function_initialize } from "./global_function_initialize.mjs";
import { promise_resolved } from "./promise_resolved.mjs";
export function indexeddb_next(lambda_async) {
  let initial = promise_resolved();
  let previous = global_function_initialize(indexeddb_next, initial);
  let promise = invoke(lambda_async);
  previous = previous.then(promise);
  global_function_set(indexeddb_next, previous);
}

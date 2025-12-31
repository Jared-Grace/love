import { global_function_set } from "../../../love/public/src/global_function_set.mjs";
import { invoke } from "../../../love/public/src/invoke.mjs";
import { indexeddb_put } from "../../../love/public/src/indexeddb_put.mjs";
import { global_function_initialize } from "../../../love/public/src/global_function_initialize.mjs";
import { promise_resolved } from "../../../love/public/src/promise_resolved.mjs";
export function indexeddb_next(lambda_async) {
  let initial = promise_resolved();
  let previous = global_function_initialize(indexeddb_put, initial);
  let promise = invoke(lambda_async);
  previous.then(promise);
  global_function_set(indexeddb_put, previous);
}

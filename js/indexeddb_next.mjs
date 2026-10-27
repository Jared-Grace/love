import { promise_resolved } from "./promise_resolved.mjs";
import { global_function_initialize } from "./global_function_initialize.mjs";
import { global_function_set } from "./global_function_set.mjs";
export function indexeddb_next(lambda_async) {
  let initial = promise_resolved();
  let previous = global_function_initialize(indexeddb_next, initial);
  ("Each write starts once the one before it has finished, so two writes of one record land in the order they were asked for.");
  let promise = previous.then(lambda_async);
  ("A write that fails still lets the ones after it run; its own caller is the one handed the failure.");
  function settled() {}
  let kept = promise.then(settled, settled);
  global_function_set(indexeddb_next, kept);
  return promise;
}

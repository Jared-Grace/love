import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { property_get } from "./property_get.mjs";
import { function_worker_pool_run } from "./function_worker_pool_run.mjs";
import { log } from "./log.mjs";
export async function server_api_generic(req, res) {
  arguments_assert(arguments, 2);
  ("run the call on a warm pooled worker rather than spawning a node process per request: startup was costing ~1.3 CPU-seconds every call, so a single page polling 3 endpoints every 4 seconds burned a whole core. ",
    fn_name("function_worker_pool_run"),
    " still retires its workers on any file change, so dev hot reload is unchanged");
  let body = property_get(req, "body");
  let f_name = property_get(body, "f_name");
  let args = property_get(body, "args");
  try {
    let result_inner = await function_worker_pool_run(f_name, args);
    res.json({
      result: result_inner,
    });
  } catch (caught) {
    ("express does not catch a rejection from an async handler, so without this the browser waits forever instead of failing — the page's own catch can only run once a response actually arrives");
    let value = property_get(caught, "message");
    let failed = String(value);
    log(server_api_generic.name, {
      f_name,
      failed,
    });
    res.status(500).json({
      result: null,
      failed,
    });
  }
}

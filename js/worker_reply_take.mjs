import { property_get } from "./property_get.mjs";
export function worker_reply_take(worker, line) {
  let reply = JSON.parse(line);
  let id = property_get(reply, "id");
  let waiting = property_get(worker, "waiting");
  let settle = property_get(waiting, id);
  delete waiting[id];
  let failed = property_get(reply, "failed");
  if (failed) {
    settle.reject(new Error(failed));
  } else {
    settle.resolve(property_get(reply, "result"));
  }
  worker_exit_if_idle(worker);
}

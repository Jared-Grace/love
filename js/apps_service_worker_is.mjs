import { apps_service_worker } from "./apps_service_worker.mjs";
import { list_includes } from "./list_includes.mjs";
export function apps_service_worker_is(name) {
  let list = apps_service_worker();
  let r = list_includes(list, name);
  return r;
}

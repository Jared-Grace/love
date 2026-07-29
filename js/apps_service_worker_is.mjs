import { apps_service_worker } from "./apps_service_worker.mjs";
import { list_includes } from "./list_includes.mjs";
export function apps_service_worker_is(name) {
  let r = list_includes(apps_service_worker(), name);
  return r;
}

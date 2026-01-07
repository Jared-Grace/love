import { log } from "../../../love/public/src/log.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function list_remove_start(list, delete_count) {
  marker("1");
  log({});
  list.splice(list, 0, delete_count);
}

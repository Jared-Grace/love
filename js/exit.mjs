import { log_keep } from "../../../love/public/src/log_keep.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function exit() {
  marker("1");
  log_keep("exited");
  process.exit();
}

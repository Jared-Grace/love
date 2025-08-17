import { log_keep } from "./log_keep.mjs";
import { marker } from "./marker.mjs";
export function exit() {
  marker("1");
  log_keep("exited");
  process.exit();
}

import { log_keep } from "../../../love/public/src/log_keep.mjs";
import { exit } from "../../../love/public/src/exit.mjs";
export function log_exit(message) {
  log_keep(message);
  exit();
}

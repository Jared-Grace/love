import { log_keep } from "./log_keep.mjs";
import { exit } from "./exit.mjs";
export function log_exit(message) {
  log_keep(log_exit.name, message);
  exit();
}

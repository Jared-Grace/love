import { exit } from "../../../love/public/src/exit.mjs";
import { log } from "../../../love/public/src/log.mjs";
export function log_exit(v) {
  log(v);
  exit();
}

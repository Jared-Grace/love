import { log_keep } from "../../../love/public/src/log_keep.mjs";
export function log(message) {
  log_keep(log.name, message);
  let a = 1;
}

import { log_keep } from "./log_keep.mjs";
export function catch_log(lambda) {
  try {
    lambda();
  } catch (e) {
    log_keep(catch_log.name, e);
  }
}

import { log } from "./log.mjs";
import { log_keep } from "./log_keep.mjs";
export function catch_log_async(lambda) {
  try {
    lambda();
  } catch (e) {
    log_keep(e);
  }
}

import { log_keep } from "../../../love/public/src/log_keep.mjs";
export function catch_log(lambda) {
  try {
    lambda();
  } catch (e) {
    log_keep(e);
  }
}

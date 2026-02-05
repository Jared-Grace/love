import { log_keep } from "../../../love/public/src/log_keep.mjs";
export function exit() {
  log_keep("exited");
  process.exit();
}

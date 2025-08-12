import { log_keep } from "./log_keep.mjs";
export function log(message) {
  console.log(message);
  return;
  log_keep(message);
}

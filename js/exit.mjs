import { log_keep } from "./log_keep.mjs";
export function exit() {
  log_keep(exit.name, "exited");
  process.exit();
}

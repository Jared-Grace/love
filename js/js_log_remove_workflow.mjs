import { log_keep } from "./log_keep.mjs";
import { js_log_remove } from "./js_log_remove.mjs";
import { log } from "./log.mjs";
export function js_log_remove_workflow() {
  (log.name, " means temporary log");
  (log_keep.name,
    " means permanent log"("first, developer adds ", log.name, " calls"));
  ("this is meant to be automated - logs are added to every assignment , showing the contents of the line and JSON value of the assigned value");
  ("then developer runs ", js_log_remove, " to remove temporary logs");
}

import { fn_name } from "./fn_name.mjs";
export function js_log_remove_workflow() {
  (fn_name("log"), " means temporary log");
  (fn_name("log_keep"), " means permanent log");
  ("first, developer adds ", fn_name("log"), " calls");
  ("this is meant to be automated - logs are added to every assignment , showing the contents of the line and JSON value of the assigned value");
  ("then developer runs ",
    fn_name("js_log_remove"),
    " to remove temporary logs");
}

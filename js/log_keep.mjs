import { fn_name } from "./fn_name.mjs";
import { log_inner } from "./log_inner.mjs";
export function log_keep(f_name, message) {
  ("see: ", fn_name("js_log_remove_workflow"));
  ("The pointer above is spelled as a name rather than imported. Naming it by value pulled the whole log-removing workflow - the js parser, the rewriter and the file writers behind it - into every command that could ever log a line, which is 90 of the 295 files a command loads, for a word meant only to tell a reader where to look. A name written this way is still followed by ",
    fn_name("function_rename"),
    ", so the pointer keeps working and costs nothing.");
  log_inner(f_name, message);
}

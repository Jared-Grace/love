import { fn_name } from "./fn_name.mjs";
export function functions_command_seams() {
  "The functions that run whatever code or command their arguments name — a shell-out, an eval, or a download-and-run. Reaching one of these is what makes calling a function by name from the command line the same as handing over the machine, so this is the list every reachability question is asked against.";
  "It is the same set the bash guard denies outright at its floor. Kept here as well because the guard can only read a command line, while this side can read the import graph, and a name that is dangerous in one place is dangerous in the other.";
  let names = [
    fn_name("command_line_generic"),
    fn_name("command_line_interactive"),
    fn_name("command_line_cmd"),
    fn_name("command_line_code_ignore"),
    fn_name("command_line_folder"),
    fn_name("command_line_generic_code_ignore"),
    fn_name("eval_console_log_replace"),
    fn_name("firebase_storage_function_run_generic"),
  ];
  return names;
}

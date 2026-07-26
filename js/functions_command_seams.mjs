export function functions_command_seams() {
  "The functions that run whatever code or command their arguments name — a shell-out, an eval, or a download-and-run. Reaching one of these is what makes calling a function by name from the command line the same as handing over the machine, so this is the list every reachability question is asked against.";
  "It is the same set the bash guard denies outright at its floor. Kept here as well because the guard can only read a command line, while this side can read the import graph, and a name that is dangerous in one place is dangerous in the other.";
  let names = [
    "command_line_generic",
    "command_line_interactive",
    "command_line_cmd",
    "command_line_code_ignore",
    "command_line_folder",
    "command_line_generic_code_ignore",
    "eval_console_log_replace",
    "firebase_storage_function_run_generic",
  ];
  return names;
}

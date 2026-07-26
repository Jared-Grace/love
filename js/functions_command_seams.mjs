import { command_line_generic } from "./command_line_generic.mjs";
import { command_line_interactive } from "./command_line_interactive.mjs";
import { command_line_cmd } from "./command_line_cmd.mjs";
import { command_line_code_ignore } from "./command_line_code_ignore.mjs";
import { command_line_folder } from "./command_line_folder.mjs";
import { command_line_generic_code_ignore } from "./command_line_generic_code_ignore.mjs";
import { eval_console_log_replace } from "./eval_console_log_replace.mjs";
import { firebase_storage_function_run_generic } from "./firebase_storage_function_run_generic.mjs";
export function functions_command_seams() {
  "The functions that run whatever code or command their arguments name — a shell-out, an eval, or a download-and-run. Reaching one of these is what makes calling a function by name from the command line the same as handing over the machine, so this is the list every reachability question is asked against.";
  "It is the same set the bash guard denies outright at its floor. Kept here as well because the guard can only read a command line, while this side can read the import graph, and a name that is dangerous in one place is dangerous in the other.";
  let names = [
    command_line_generic.name,
    command_line_interactive.name,
    command_line_cmd.name,
    command_line_code_ignore.name,
    command_line_folder.name,
    command_line_generic_code_ignore.name,
    eval_console_log_replace.name,
    firebase_storage_function_run_generic.name,
  ];
  return names;
}

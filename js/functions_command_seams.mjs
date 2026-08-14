import { fn_name } from "./fn_name.mjs";
export function functions_command_seams() {
  "The functions that run whatever code or command their arguments name — a shell-out, an eval, or a download-and-run. Reaching one of these is what makes calling a function by name from the command line the same as handing over the machine, so this is the list every reachability question is asked against.";
  "It is the same set the bash guard denies outright at its floor. Kept here as well because the guard can only read a command line, while this side can read the import graph, and a name that is dangerous in one place is dangerous in the other.";
  let f_name = fn_name("command_line_generic");
  let f_name2 = fn_name("command_line_interactive");
  let f_name3 = fn_name("command_line_cmd");
  let f_name4 = fn_name("command_line_code_ignore");
  let f_name5 = fn_name("command_line_folder");
  let f_name6 = fn_name("command_line_generic_code_ignore");
  let f_name7 = fn_name("eval_console_log_replace");
  let f_name8 = fn_name("nearley_grammar_text_parser");
  let f_name9 = fn_name("firebase_storage_function_run_generic");
  let f_name10 = fn_name("file_module_import");
  ("The two that run a repo function their own argument names. They were missing, and the hole they left was the whole point of the list: the guard's floor matches the function name in the third word of the command, so handing the banned name to one of these moves it to the fourth word, where nothing looks. The grant check missed it for a second reason - it reads which functions a function calls, and these call nothing by name, they pick the function out of an argument at run time, so the graph shows a leaf. Neither half could see it, and a grant on one would have been a standing approval for every command on the machine.");
  ("Named here rather than the importer beneath them. That one only imports, and only a repo function at that, so what it hands back is a function nobody has called yet. The line that hands the machine over is the call - await fn(...args) - and it is written in these two.");
  let f_name11 = fn_name("function_run");
  let f_name12 = fn_name("function_run_unalias");
  let names = [
    f_name,
    f_name2,
    f_name3,
    f_name4,
    f_name5,
    f_name6,
    f_name7,
    f_name8,
    f_name9,
    f_name10,
    f_name11,
    f_name12,
  ];
  return names;
}

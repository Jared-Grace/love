import { fn_name } from "./fn_name.mjs";
export function dispatcher_commands_fn_named() {
  "the dispatcher commands whose FOURTH word is a function name, so `node <script> <command> <fn> <args>` acts on that function rather than running it";
  "the guard folds three words into the verb, which is enough while the third word is the function itself. For these the third word is the same for every call and the function is one word further along, so all of them collapse to a single verb and a rule can only ever grant the command for every function at once.";
  "mirrors DISPATCHER_COMMANDS_FN_NAMED in .claude/hooks/bash-command-guard.py — the fold reads it to know when to take a fourth word, so the two must agree or a rule naming one function silently grants none of them";
  "the name is spelled rather than imported: reading a name is all this needs, and importing the command would pull git and the shell into the dependency graph of a list that only ever holds words";
  let f_name = fn_name("ai_git_command_args");
  let commands = [f_name];
  return commands;
}

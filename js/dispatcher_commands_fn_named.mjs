export function dispatcher_commands_fn_named() {
  "the dispatcher commands whose FOURTH word is a function name, so `node <script> <command> <fn> <args>` acts on that function rather than running it";
  "the guard folds three words into the verb, which is enough while the third word is the function itself. For these the third word is the same for every call and the function is one word further along, so all of them collapse to a single verb and a rule can only ever grant the command for every function at once.";
  "mirrors DISPATCHER_COMMANDS_FN_NAMED in .claude/hooks/bash-command-guard.py — the fold reads it to know when to take a fourth word, so the two must agree or a rule naming one function silently grants none of them";
  "the name is spelled rather than imported: reading a name is all this needs, and importing the command would pull git and the shell into the dependency graph of a list that only ever holds words";
  "empty since 2026-10-30. The one command it held was the by-name commit, and that command never runs the function it is handed - it checks the name is a real one and writes it into a commit message. So a grant per function withheld nothing: whatever name it carried, the command did the same thing, and its arguments were free under every rule anyway. What it did cost was a prompt for the human every time a commit was labelled with a command nobody had granted yet. List a command here only when the function in its fourth word changes what it does.";
  let commands = [];
  return commands;
}

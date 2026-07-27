export function functions_permission_seams() {
  "The functions that write Claude's own permission rules — the settings file the harness reads to decide what runs without asking, and the source list that file is generated from. Reaching one of these is what makes a command able to widen what commands are allowed.";
  "This is the third set the reachability walk is asked against, and it asks a different question from the other two. Reaching a shell means the arguments could become a command line; reaching a writer means the call costs something that cannot be taken back; reaching one of these means the call can hand out further calls that never ask. That last one escalates rather than merely acts, so an automatic approval for it approves everything it goes on to approve.";
  "Arguments do not enter into it, which is the one way this differs from the command-running set. A grant is only ever given to a function whose behaviour is fixed regardless of its arguments, and a regenerator that takes nothing is exactly that — it renders the file from a list held in ordinary source, which anything that can edit a file can change first. So the escalation is in the write, not in what steers it, and taking no arguments is no defence.";
  let names = [
    "permission_settings_allow_write_from",
    "permission_grant_names_write",
  ];
  return names;
}

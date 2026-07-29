export function git_call_message(f_name, args) {
  "The message a commit carries is the command that produced it — the name that";
  "was run, then what it was run on. A log of these reads as a record of how the";
  "repo was built, and a message that names nothing is itself the signal that no";
  "named unit did that change.";
  "Nothing is stripped out of it. Characters a shell would read as punctuation used";
  "to be turned into spaces here, and back when the commit was built by pasting the";
  "message into a line of command text between two quote marks, that was right: a";
  "quote ended the quoted run early and a dollar or a semicolon was read rather than";
  "written. The commit is spawned from a list of words now, so the message arrives as";
  "one word no matter what is in it, and stripping only lost the arguments it was";
  "meant to be recording — a rename of a parameter written with dollars logged as a";
  "command whose arguments cannot be run again.";
  let joined = [f_name].concat(args).join(" ");
  return joined;
}

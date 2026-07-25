export function bash_command_label(command) {
  "A short stable name for a shell command, so many runs of the same thing count as one thing: the program, plus its first bare-word argument, plus the function name when it is a dispatcher call. Flags, paths and quoted text are dropped - they are exactly what varies between otherwise identical calls.";
  let pieces = command.trim().split(/\s+/);
  let program = pieces[0];
  if (pieces.length < 2) {
    return program;
  }
  let second = pieces[1];
  let bare = /^[A-Za-z][A-Za-z0-9_-]*$/;
  if (second.endsWith(".mjs") && pieces.length > 2 && bare.test(pieces[2])) {
    let dispatched = program + " " + second + " " + pieces[2];
    return dispatched;
  }
  if (bare.test(second)) {
    let pair = program + " " + second;
    return pair;
  }
  return program;
}

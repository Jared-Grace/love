export function command_shell_operators() {
  "the characters that make one command line into more than one thing being run";
  "spelled once so every reader of a command agrees on what counts as a chain — a list that differs between two readers lets a command look single to one and chained to the other, which is exactly the disagreement a permission rule cannot survive";
  "the two-character forms need no entry of their own: the pair && contains &, and >> contains >, so matching the single character catches both";
  let operators = [";", "|", "&", ">", "<", "`", "$(", "\n"];
  return operators;
}

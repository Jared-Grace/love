export function command_operators_unfoldable() {
  "the characters in a command line that no rule naming a single function can ever see past";
  "a pipe and a semicolon are deliberately absent, and that absence is the whole reason this list is not the one every reader of a command already shares. The guard folds a sequence or a pipeline by asking whether every verb in it is approved, so a line that only pipes one function into a tool for trimming its output becomes allowed the moment that function is granted - and counting that line as ungrantable hides the one grant that would have stopped it.";
  "what is here cannot be folded because none of it is a verb anything can be asked about: a redirect writes a file of its own, a substitution runs a second command inside the first, a lone ampersand detaches the whole thing, and a newline starts again.";
  "the doubled ampersand is not an entry even though the single one is, because it chains two commands exactly as a semicolon does. A reader takes it off, along with the stderr redirect that only joins one of a command's own two outputs to the other, before looking for anything here.";
  let operators = [">", "<", "`", "$(", "&", "\n"];
  return operators;
}

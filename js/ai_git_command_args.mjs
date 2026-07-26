import { text_split_comma_or_empty } from "./text_split_comma_or_empty.mjs";
import { ai_git_command_generic } from "./ai_git_command_generic.mjs";
export async function ai_git_command_args(f_name, args_comma) {
  "The command-line way in: the arguments arrive as one comma-joined word, the";
  "same shape every other transform takes a list in from a command line.";
  "Worth its own name because a command line hands each word over as a separate";
  "parameter, so a function declaring two parameters silently keeps the first two";
  "words and drops the rest. A commit message is a claim about what produced the";
  "change, and a claim missing its last argument is worse than no claim: it names";
  "a command that would not reproduce the commit.";
  let args = text_split_comma_or_empty(args_comma);
  await ai_git_command_generic(f_name, args);
}

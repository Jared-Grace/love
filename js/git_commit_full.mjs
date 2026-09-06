import { text_trim } from "./text_trim.mjs";
import { git_here_run_text } from "./git_here_run_text.mjs";
export async function git_commit_full(commit) {
  "The full name of the commit you name, however you spelled it - a short name, a branch, or the full name already.";
  "Git answers to a shortened name everywhere, so a shortened one works right up until something is filed under it. Then it is a different word from the full name the same commit is listed under elsewhere, and a record written under one is looked for under the other and never found.";
  "The commit is handed over as its own word rather than written into a line of text. It arrives from whoever is asking - a person at a prompt, and through them anything that reaches a prompt - and a line of text has to be split back into words before it can be run, so a value carried inside one can stop being one word. Written into a line, every command that takes a commit and reaches this becomes a way to run something else, which is what held six of them out of an automatic allow rule. The word list closes that at the one place the value enters a command.";
  let asked = text_trim(commit);
  let full = await git_here_run_text(["rev-parse", asked]);
  return full;
}

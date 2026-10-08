import { arguments_assert } from "./arguments_assert.mjs";
import { json_to } from "./json_to.mjs";
export function git_commit_word_assert(commit) {
  "Refuses a word that is meant to name a commit but would be read by git as an option instead.";
  "Git reads any word starting with a dash as an option, wherever it stands in the line, so a commit handed in from outside can turn into an instruction: given to show, a word like --output= followed by a path writes that file. A function holding a standing approval and passing its argument to git as the commit would let that through with nobody asked.";
  "Checked once where the argument comes in rather than with a marker in every git line, because one argument often reaches git in more than one line, and a marker has to sit exactly between the fixed options and the passed-in words - which differs line by line. A commit, a branch and a tag never start with a dash, so refusing the dash refuses nothing real.";
  arguments_assert(arguments, 1);
  let b = commit.startsWith("-");
  if (b) {
    let json = json_to({
      commit,
      hint: "a commit never starts with a dash - git would read this as an option, not as a commit",
    });
    throw new Error(json);
  }
}

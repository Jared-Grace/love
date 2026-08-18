import { git_folder_run } from "./git_folder_run.mjs";
export async function git_current_run(command_words) {
  "Runs git where we are standing, given the command as a list of words, and answers what it printed.";
  "The folder is the one the process is already in, which is what the caller means by saying nothing about a folder at all. Every one of these commands is about the repo being worked in, so a parameter for the folder would be a parameter with one answer.";
  "The list is what makes this the successor to the text seam it replaces. A line of text has to be split back into words before it can be run, and two callers build that line by writing a value into it - a path to stop tracking, an address to clone from - so a value carrying a space stopped being one word and everything after it arrived as further arguments to git. Handing the words over already separated means nothing a word contains can make it into two.";
  let out = await git_folder_run(".", command_words);
  return out;
}

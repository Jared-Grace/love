import { child_output_wait } from "./child_output_wait.mjs";
import { property_get } from "./property_get.mjs";
export async function git_folder_run(folder, command_words) {
  "Runs git in one folder, given the command as a list of words rather than as a line of text, and answers what it printed.";
  "The list is the whole point. A line of text has to be split back into words before it can be run, and that split is what lets a value carried inside the line stop being one word: a quote in a commit message ends the quoted run early, and everything after it arrives as further arguments to git. Handing the words over already separated means nothing a word contains can make it into two.";
  "The program is spelled here and is never a parameter, so this cannot be asked to run anything but git. That is what keeps it off the list of functions whose arguments name what to run - and if a later change makes the program an argument, it belongs on that list.";
  "Waiting for what it printed is shared with the other wrappers, because reading a program that is already running cannot choose which program ran - only the spawning has to stay here, where the name is spelled.";
  let cp = await import("child_process");
  let spawn = property_get(cp, "spawn");
  let words = ["-C", folder].concat(command_words);
  let child = spawn("git", words, {
    shell: false,
  });
  let out = await child_output_wait(child, "git", words);
  return out;
}

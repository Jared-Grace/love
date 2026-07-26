import { child_output_wait } from "./child_output_wait.mjs";
import { property_get } from "./property_get.mjs";
export async function npm_run(words) {
  "Runs npm with the command given as a list of words rather than as a line of text, and answers what it printed.";
  "The list is the whole point. A line of text has to be split back into words before it can be run, and that split is what lets a value carried inside the line stop being one word - a package name is data from somewhere else, and inside a line it can end the command and start another. Handing the words over already separated means nothing a word contains can make it into two.";
  "The program is spelled here and is never a parameter, so this cannot be asked to run anything but npm. That is what keeps it off the list of functions whose arguments name what to run - and if a later change makes the program an argument, it belongs on that list.";
  "The spawning is what each wrapper has to keep, because it is the one line naming the program. Waiting for what was printed is shared instead: a function handed a program already running cannot choose which program ran, so sharing that half leaves nothing for an argument to steer.";
  let cp = await import("child_process");
  let spawn = property_get(cp, "spawn");
  let child = spawn("npm", words, {
    shell: false,
  });
  let out = await child_output_wait(child, "npm", words);
  return out;
}

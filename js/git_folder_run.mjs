import { greater_than_equal } from "./greater_than_equal.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { child_output_wait } from "./child_output_wait.mjs";
import { sleep } from "./sleep.mjs";
export async function git_folder_run(folder, command_words) {
  "Runs git in one folder, given the command as a list of words rather than as a line of text, and answers what it printed.";
  "The list is the whole point. A line of text has to be split back into words before it can be run, and that split is what lets a value carried inside the line stop being one word: a quote in a commit message ends the quoted run early, and everything after it arrives as further arguments to git. Handing the words over already separated means nothing a word contains can make it into two.";
  "The program is spelled here and is never a parameter, so this cannot be asked to run anything but git. That is what keeps it off the list of functions whose arguments name what to run - and if a later change makes the program an argument, it belongs on that list.";
  "Waiting for what it printed is shared with the other wrappers, because reading a program that is already running cannot choose which program ran - only the spawning has to stay here, where the name is spelled.";
  let cp = await import("child_process");
  let spawn = property_get(cp, "spawn");
  ("A KEPT LOCK IS WAITED OUT, AND NOTHING ELSE IS (2026-10-27). Any git that touches the index - a status, an add, a commit - holds a lock file for the moment it runs, and a second git in the same folder at that moment refuses at once. With several workers in one folder that is ordinary, and it killed an hours-long walk twice, both times on a lock gone a second later. Git refuses before doing anything when it finds the lock, so asking again cannot do the work twice. Every other failure is still thrown on the first attempt, because waiting on a real fault only delays hearing about it.");
  let words = ["-C", folder].concat(command_words);
  let attempts = 60;
  for (let attempt = 1; ; attempt++) {
    try {
      let child = spawn("git", words, {
        shell: false,
      });
      let out = await child_output_wait(child, "git", words);
      return out;
    } catch (e) {
      let locked = String(e.message).includes("index.lock': File exists");
      if (not(locked) || greater_than_equal(attempt, attempts)) {
        throw e;
      }
      await sleep(1000);
    }
  }
}

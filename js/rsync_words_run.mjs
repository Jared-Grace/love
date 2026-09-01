import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { child_output_wait } from "./child_output_wait.mjs";
export async function rsync_words_run(command_words) {
  arguments_assert(arguments, 1);
  ("$plain command_words");
  ("Runs rsync, given the command as a list of words rather than as a line of text, and answers what it printed.");
  ("The program is spelled here and is never a parameter, so this cannot be asked to run anything but rsync. That is what keeps it off the list of functions whose arguments name what to run - and if a later change makes the program an argument, it belongs on that list.");
  ("HANDED THE WORDS ALREADY SEPARATED, nothing a folder is called can turn into two words or into an instruction. A folder holding a space, a quote or a dollar in its name is ordinary on a disk and is exactly what a line of text cannot carry safely; there is no splitting here to be confused by one.");
  ("Waiting for what it printed is shared with the other wrappers, because reading a program that is already running cannot choose which program ran - only the spawning has to stay here, where the name is spelled.");
  let cp = await import("child_process");
  let spawn = property_get(cp, "spawn");
  let child = spawn("rsync", command_words, {
    shell: false,
  });
  let out = await child_output_wait(child, "rsync", command_words);
  return out;
}

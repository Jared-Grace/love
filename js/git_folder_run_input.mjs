import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { child_output_wait } from "./child_output_wait.mjs";
export async function git_folder_run_input(folder, command_words, input) {
  "$plain folder";
  "$plain input";
  arguments_assert(arguments, 3);
  ("Runs git in a folder with a text handed to it on its standard input, and answers what it printed - for the commands that read what to do from there rather than from their words, such as writing an object.");
  let cp = await import("child_process");
  let spawn = property_get(cp, "spawn");
  let words = ["-C", folder].concat(command_words);
  let child = spawn("git", words, {
    shell: false,
  });
  child.stdin.end(input, "utf-8");
  let out = await child_output_wait(child, "git", words);
  return out;
}

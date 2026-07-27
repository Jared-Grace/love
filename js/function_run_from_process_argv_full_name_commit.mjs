import { ai_git } from "./ai_git.mjs";
import { function_run_from_process_argv_full_name } from "./function_run_from_process_argv_full_name.mjs";
import { ai_git_command_generic } from "./ai_git_command_generic.mjs";
export async function function_run_from_process_argv_full_name_commit() {
  "Runs the function named on the command line and commits what it wrote, under its own name and its own real arguments.";
  "The commit is the point. A transform that edits and stops leaves its work to whoever sweeps the folder next, and a sweep has no single command to name, so it files everything under the bare word - which is how a repo built almost entirely out of named commands comes to have a history that says nothing about any of them. Measured on one day: about forty transforms run, two commits carrying a command name.";
  "The sweep beforehand is what makes the message afterwards true. Anything edited by hand leaves no note of itself, so without it the targeted commit would either miss those edits or, worse, file them under a command that never touched them. Sweeping first empties the folder of everything the command is not responsible for, and what the command then writes is the only thing left to commit.";
  "It is a separate seam rather than a change to the plain one, because committing is not something to be given to somebody who did not ask for it. Both run the same function the same way; only this one files the result.";
  await ai_git();
  let result = await function_run_from_process_argv_full_name();
  let [, , f_name, ...args] = process.argv;
  await ai_git_command_generic(f_name, args);
  return result;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { process_env_lines_whole } from "./process_env_lines_whole.mjs";
import { child_output_wait } from "./child_output_wait.mjs";
export async function node_run_lines_whole(folder, words) {
  arguments_assert(arguments, 2);
  ("Runs node in one folder the way its neighbour does, and asks the run for its whole result rather than a shortened one.");
  ("The neighbour is the one to use when a person is going to read what came back. This is the one to use when a program is, because a program cannot read past a line saying how much was left out.");
  ("The spawning is written out here rather than shared, for the reason the neighbour gives: the line naming the program is what each of these has to keep, so that nothing handed in can decide what runs.");
  let cp = await import("child_process");
  let spawn = property_get(cp, "spawn");
  let env = process_env_lines_whole();
  let child = spawn("node", words, {
    cwd: folder,
    shell: false,
    env,
  });
  let out = await child_output_wait(child, "node", words);
  return out;
}

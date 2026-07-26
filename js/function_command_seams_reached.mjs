import { function_command_seams_reached_memo } from "./function_command_seams_reached_memo.mjs";
export async function function_command_seams_reached(f_name) {
  "Which of the command-running functions this one can reach through its imports, with the plumbing edges left out. An empty answer is the useful one: nothing this function calls, however deep, ends at a shell or an eval, so handing it a name to run is handing over a name and not the machine.";
  "Reachability is asked rather than trusted because the caller of a plugin cannot read the plugin, and the import graph is the only thing that answers for code nobody opened.";
  "One name on its own is the same walk as many with nothing remembered beforehand, so this hands over an empty memory rather than keeping a second copy of the walk.";
  let remembered = {};
  let reached = await function_command_seams_reached_memo(f_name, remembered);
  return reached;
}

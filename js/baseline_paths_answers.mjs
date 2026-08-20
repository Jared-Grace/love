import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_paths_names } from "./baseline_paths_names.mjs";
import { function_run } from "./function_run.mjs";
import { property_set } from "./property_set.mjs";
export async function baseline_paths_answers() {
  "Every ratchet's record path function asked what it answers, gathered as the name of each against the address it hands back.";
  "The addresses and not the count. A sweep over these functions can be reasoned about and still be got wrong, and a count that matches proves only that the same number of things came back - it says nothing about whether any one of them still names the file it named before. So the way to check a change to how these are written is to ask this before it and after it and compare the two answers side by side.";
  "Asked in a run of its own each time rather than twice inside one. A module is read off disk once per run and kept, so a second ask after a rewrite hands back the copy held from before it, and the comparison would come out perfect however badly the rewrite went.";
  arguments_assert(arguments, 0);
  let path_names = await baseline_paths_names();
  let answers = {};
  for (let path_fn_name of path_names) {
    let spelled = await function_run(path_fn_name, []);
    property_set(answers, path_fn_name, spelled);
  }
  return answers;
}

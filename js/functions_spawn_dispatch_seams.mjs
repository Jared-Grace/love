import { fn_name } from "./fn_name.mjs";
export function functions_spawn_dispatch_seams() {
  "The functions that start node in a folder their caller names, on words their caller names. The program is fixed, so these are not command seams - but the folder decides which code is there to run and the words decide which file and which repo function, so whoever chooses those two chooses what runs.";
  "They are the other half of the dispatchers, the half that crosses a process boundary. The in-process dispatchers are listed apart because they feed the guard's floor; these are not typed at a dispatcher in practice, and what they open is reached from source. That is how the hole was found rather than reasoned about: a granted function handed its argument to one of these as the repo function to run, so a single standing approval ran any function that takes nothing - including the ones holding no approval of their own - and the in-process list could not see it, because the import graph shows these as leaves.";
  "The names are spelled rather than imported, for the reason every other seam roster gives: an import here would give the roster an edge to what it names, and every walk consulting it would report the roster as a dispatcher itself.";
  let names = [fn_name("node_run"), fn_name("node_run_lines_whole")];
  return names;
}

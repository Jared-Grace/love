import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { apps_node_only_carried_baseline_path } from "./apps_node_only_carried_baseline_path.mjs";
import { apps_node_only_carried } from "./apps_node_only_carried.mjs";
export async function apps_node_only_carried_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: no page starts carrying more code that could never run in it.");
  ("The sister gate asks what an app can reach in a browser and turns aside at every environment check, so it is silent about weight - a bundler follows a plain import whether the branch runs or not. Six pages were shipping a bible downloader, an unzipper and a chapter-by-chapter disk reader, three hundred and thirty-seven thousand bytes of it, with every gate green, because every gate was asking the other question.");
  ("Measured against what the bundles already carried rather than against zero. This was tried against zero once and left out of the suite, because at that time there was nothing a reader could do about a name it reported; asking for a function by its name at the moment it is wanted is what made the answer actionable, and the four names remaining are ones nobody has separated yet.");
  let offenders = await apps_node_only_carried();
  let path = apps_node_only_carried_baseline_path();
  let name_write = fn_name("apps_node_only_carried_baseline_write");
  let r = await baseline_names_gate_generic(
    offenders,
    path,
    text_combine_multiple([
      "a page now downloads this in order never to execute it - ask ",
      fn_name("apps_node_only_carried_steps"),
      " for the chain, then give the build machine's half its own name and ask for it by that name, so a bundler cannot see through the address",
    ]),
    name_write,
  );
  return r;
}

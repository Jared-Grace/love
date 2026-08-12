import { example_files_command_cores } from "./example_files_command_cores.mjs";
import { functions_search } from "./functions_search.mjs";
import { properties_keys } from "./properties_keys.mjs";
import { function_seams_reached_memo } from "./function_seams_reached_memo.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_add } from "./list_add.mjs";
export async function example_files_command_guard_drift() {
  ("Which whole-repo commands can refuse where the folder-sized twin the corpus runs cannot.");
  ("The registry next door pairs each command with a hermetic twin, and the corpus runs the twin. So a guard that stands in the command and not in the twin is a refusal no example can ever prove - the corpus demonstrates the mechanism and quietly says nothing about the one behaviour a reader most wants pinned. Measured twice in one day: the twin for the parameter rename had no guard at all, and the twin paired with the list-taking delete took a single name, so the refusal the corpus reported was a refusal of the wrong question.");
  ("Reaching is asked rather than reading each file, because a guard almost never stands in the command itself - it stands several calls down. A reading of the two files alone found one of the nine and missed the rest.");
  let f_names = await functions_names();
  let asserts = list_filter_text_includes(f_names, "assert");
  let cores = example_files_command_cores();
  let remembered = {};
  let drifted = [];
  for (let pair of cores) {
    let name = property_get(pair, "name");
    let core = property_get(pair, "core");
    let core_name = property_get(core, "name");
    let command_guards = await function_seams_reached_memo(
      name,
      asserts,
      remembered,
    );
    let core_guards = await function_seams_reached_memo(
      core_name,
      asserts,
      remembered,
    );
    let command_guarded = list_empty_not_is(command_guards);
    let core_bare = list_empty_is(core_guards);
    if (command_guarded) {
      if (core_bare) {
        let one = {
          name,
          core: core_name,
          command_guards,
        };
        list_add(drifted, one);
      }
    }
  }
  return drifted;
}

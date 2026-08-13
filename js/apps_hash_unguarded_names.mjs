import { apps_all_main_fns } from "./apps_all_main_fns.mjs";
import { functions_reachable_unguarded } from "./functions_reachable_unguarded.mjs";
import { hash_object_read_name } from "./hash_object_read_name.mjs";
import { hash_fields_guard_names } from "./hash_fields_guard_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export async function apps_hash_unguarded_names() {
  "Every app that reads the address of its own page and never tells the reader when that address says something it cannot make sense of.";
  "Asked of the app rather than of the function that does the reading, because the reading is usually several steps down and the answering has to happen at the top - before the page fetches anything or clears anything - so the function that finds the bad word is never the one that can do anything about it.";
  "Both halves are walks of what a browser really reaches rather than of what a file imports, so a page is not counted as reading an address because some branch it never travels does.";
  let mains = apps_all_main_fns();
  let read = hash_object_read_name();
  let guards = hash_fields_guard_names();
  let unguarded = [];
  for (let main of mains) {
    let starts = [main];
    let reached = await functions_reachable_unguarded(starts);
    let reads = list_includes(reached, read);
    if (reads) {
      let answered = false;
      for (let guard of guards) {
        let reaches_guard = list_includes(reached, guard);
        if (reaches_guard) {
          answered = true;
        }
      }
      if (not(answered)) {
        list_add(unguarded, main);
      }
    }
  }
  return unguarded;
}

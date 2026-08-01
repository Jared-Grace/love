import { storage_local_key_sites } from "./storage_local_key_sites.mjs";
import { property_get } from "./property_get.mjs";
import { storage_local_key_names_apps } from "./storage_local_key_names_apps.mjs";
import { list_concat } from "./list_concat.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { functions_names } from "./functions_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique } from "./list_unique.mjs";
export async function storage_local_key_names_found() {
  "Every function whose name the repo writes into a browser storage key today, read off the source rather than off any record. Read-only.";
  "Only the files that mention the storing at all are opened. The question could be asked of every function in the repo and would answer the same, at the cost of parsing two thousand trees to find eight names.";
  "Which calls to read includes the front doors that take a key word and hand it on, so a name written at a door is reached where it is actually written.";
  "A word standing where the owner goes that answers to no function is dropped here, and this is the only place that can be known - inside one file a parameter and a function look identical. What is dropped is a helper handed the owner by its own caller, and which caller that was is not written anywhere a reading of one file can follow - so it is asked the other way round, of the apps, and those names come in beside these.";
  arguments_assert(arguments, 0);
  let sites = await storage_local_key_sites();
  let live = await functions_names();
  let found = [];
  for (let site of sites) {
    let names = property_get(site, "names");
    for (let one of names) {
      let is_live = list_includes(live, one);
      if (is_live) {
        list_add(found, one);
      }
    }
  }
  let apps = await storage_local_key_names_apps();
  let both = list_concat(found, apps);
  let unique = list_unique(both);
  unique.sort();
  return unique;
}

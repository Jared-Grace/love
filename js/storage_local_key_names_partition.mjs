import { arguments_assert } from "./arguments_assert.mjs";
import { storage_local_key_sites } from "./storage_local_key_sites.mjs";
import { functions_names } from "./functions_names.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
export async function storage_local_key_names_partition() {
  "Every name the repo writes into a browser storage key today, sorted into two piles: the names that are themselves live functions, and - for each name answering to no function, since a word standing where an owner goes that matches nothing came in from the caller - the writing function's own name instead. Read-only.";
  "The one scan of the storage sites that both key queries are built on, so the sites and the live-name list are fetched a single time here rather than once in each. Every stored name lands in exactly one pile, so the two piles together are the whole scan.";
  arguments_assert(arguments, 0);
  let sites = await storage_local_key_sites();
  let live = await functions_names();
  let live_names = [];
  let forwarder_f_names = [];
  for (let site of sites) {
    let f_name = property_get(site, "f_name");
    let names = property_get(site, "names");
    for (let one of names) {
      let is_live = list_includes(live, one);
      if (is_live) {
        list_add(live_names, one);
      } else {
        list_add(forwarder_f_names, f_name);
      }
    }
  }
  let r = {
    live_names,
    forwarder_f_names,
  };
  return r;
}

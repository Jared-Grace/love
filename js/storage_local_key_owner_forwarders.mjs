import { storage_local_key_sites } from "./storage_local_key_sites.mjs";
import { functions_names } from "./functions_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_map_unique } from "./list_map_unique.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function storage_local_key_owner_forwarders() {
  "Every function that stores under an owner it was handed rather than one it names, so the name it publishes is its caller's and not its own. Read-only.";
  "A key is the owning function's name with a word after it. Most storing says whose it is outright; some is written to serve whoever calls it, and takes the owner as a parameter - a shared setting like a font size is stored by one piece of code on behalf of every app that reaches it. Reading that file tells you nothing about which name reached the disk, because the answer is a different name for each caller.";
  "They are known by what is missing. The reading of one file hands back every word standing where the owner goes, without asking whether it is a function; a word there that answers to no function in the repo is a variable, and a variable is exactly the case where the owner came from somewhere else.";
  arguments_assert(arguments, 0);
  let sites = await storage_local_key_sites();
  let live = await functions_names();
  function forwarding_is(site) {
    let names = property_get(site, "names");
    function live_not_is(one) {
      let is_live = list_includes(live, one);
      let n = not(is_live);
      return n;
    }
    let forwarded = list_filter(names, live_not_is);
    let any = list_empty_not_is(forwarded);
    return any;
  }
  let forwarding = list_filter(sites, forwarding_is);
  function site_f_name(site) {
    let f_name = property_get(site, "f_name");
    return f_name;
  }
  let unique = list_map_unique(forwarding, site_f_name);
  unique.sort();
  return unique;
}

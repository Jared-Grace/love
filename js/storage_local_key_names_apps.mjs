import { arguments_assert } from "./arguments_assert.mjs";
import { app_apps_all_main_fns } from "./app_apps_all_main_fns.mjs";
import { storage_local_key_owner_forwarders } from "./storage_local_key_owner_forwarders.mjs";
import { function_reachable_names } from "./function_reachable_names.mjs";
import { list_intersect } from "./list_intersect.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_add } from "./list_add.mjs";
export async function storage_local_key_names_apps() {
  "Every app whose own name reaches a browser storage key, because the storing it reaches is written to serve whoever calls it. Read-only.";
  "An app hands its own name to the shared setup once, and from there it rides along in the context every screen is drawn with. Whichever shared piece of code later saves a font size or which screen you were on files it under that name, so the key on the disk says the app - and the app's file has no storing in it at all to find.";
  "So it is asked from the app end rather than the storing end. An app publishes its name if the code it carries includes any of the storing that takes an owner, which is a question its imports answer: what an entry point can reach is what a page built from it ships.";
  "Reaching is not running, so an app that carries the storing and never runs it is named here anyway. That is the safe direction on purpose. Being named costs a line in the record and a sentence at a rename; not being named costs somebody's saved settings, with no way to get them back.";
  arguments_assert(arguments, 0);
  let apps = app_apps_all_main_fns();
  let forwarders = await storage_local_key_owner_forwarders();
  let names = [];
  for (let app of apps) {
    let reachable = await function_reachable_names(app);
    let met = list_intersect(reachable, forwarders);
    let publishes = list_empty_not_is(met);
    if (publishes) {
      list_add(names, app);
    }
  }
  names.sort();
  return names;
}

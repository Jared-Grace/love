import { permission_grant_names_settings_write } from "./permission_grant_names_settings_write.mjs";
import { permission_grant_names } from "./permission_grant_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_remove } from "./list_remove.mjs";
export async function permission_grant_remove(unaliased) {
  "take back the standing approval this one function held, so that running it asks again";
  "the inverse of the verb that grants one, and until now the only half that existed. A granted function that is later deleted leaves its rule behind naming nothing, which the gate reads as a dead name and fails on - so the removal had to happen by hand in a generated file, which is the one place a hand is never meant to go";
  "naming a function that holds no rule changes nothing and says so, so running this twice is the same as running it once";
  let names = permission_grant_names();
  let held = list_includes(names, unaliased);
  if (not(held)) {
    let unknown = {
      name: unaliased,
      removed: false,
      names: names.length,
    };
    return unknown;
  }
  list_remove(names, unaliased);
  let allow = await permission_grant_names_settings_write(names);
  let report = {
    name: unaliased,
    removed: true,
    names: names.length,
    allow,
  };
  return report;
}

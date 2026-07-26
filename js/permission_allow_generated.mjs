import { permission_allow_generated_from } from "./permission_allow_generated_from.mjs";
import { permission_grant_names } from "./permission_grant_names.mjs";
export function permission_allow_generated() {
  "every allow rule the shared settings file should hold, built from the one list of granted function names rather than written twice";
  "this reads the list as the loaded module holds it, which is what anything asking what the file should look like right now wants. A command that has just written a new name must render from the list it wrote instead, because the loader keeps the module it already loaded however many times the file underneath it is rewritten.";
  let names = permission_grant_names();
  let rules = permission_allow_generated_from(names);
  return rules;
}

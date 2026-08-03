import { fn_name } from "./fn_name.mjs";
export function permission_writers_grantable() {
  "the functions that write Claude's own permission rules and may still be handed a standing approval, which is every one the gate below is allowed to find clean";
  "both are argument-free generators: one renders the settings file from the granted-names list, the other renders that list from itself. What they write is fixed by committed source, so a rule covering every argument they are ever handed covers nothing they would not do anyway, and changing what they write means editing the source first - a visible edit that no standing approval buys.";
  "everything else that reaches a rule writer has to be refused for some reason, and this list is where a new exception has to be argued for in a commit rather than discovered later by somebody wondering why the check said nothing.";
  let generator = fn_name("permission_settings_allow_write");
  let generator2 = fn_name("permission_grant_names_rewrite");
  let names = [generator, generator2];
  return names;
}

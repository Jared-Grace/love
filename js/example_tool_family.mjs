import { example_tool_families } from "./example_tool_families.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { not } from "./not.mjs";
export function example_tool_family(fn) {
  "The tool-family label an example clusters under in the menu - same family, one sub-header. The pairing of command to word is a register next door; here is only the looking up, and the answer for a command the register does not name, which is the command itself. The menu draws a sub-header for a run of two or more, so a command standing alone shows none.";
  let families = example_tool_families();
  let found = list_find_property_or_null(families, "name", fn);
  if (not(found)) {
    return fn;
  }
  let family = found.family;
  return family;
}

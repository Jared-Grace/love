import { functions_duplicates } from "./functions_duplicates.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
export async function functions_duplicates_report() {
  "Say out loud which functions do the same thing under different names, one group to a line, so a person can judge which groups are one idea written twice.";
  let groups = await functions_duplicates();
  for (let group of groups) {
    let names = property_get(group, "names");
    let work = property_get(group, "work");
    let joined = list_join_comma(names);
    let tag = work ? "         " : "constant ";
    console.log(tag + names.length + "  " + joined);
  }
  let working = list_filter_property(groups, "work");
  console.log("\ngroups " + groups.length + ", of them doing work " + working.length);
  let result = {
    groups: groups.length,
    working: working.length,
  };
  return result;
}

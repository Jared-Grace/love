import { functions_inside_duplicates_size } from "./functions_inside_duplicates_size.mjs";
import { functions_inside_duplicates } from "./functions_inside_duplicates.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
export async function functions_inside_duplicates_report() {
  "Say out loud which functions share a run of work somewhere inside them, one group to a line, so a person can judge which runs are a helper waiting to be written.";
  "The run itself is printed under the names it was found in, because the names alone cannot be judged - two screens sharing four lines is a finding only once you can see which four.";
  let size = functions_inside_duplicates_size();
  let groups = await functions_inside_duplicates(size);
  for (let group of groups) {
    let names = property_get(group, "names");
    let count = property_get(group, "count");
    let shape = property_get(group, "shape");
    let joined = list_join_comma(names);
    console.log(count + "  " + joined);
    console.log(shape);
  }
  console.log("\ngroups " + groups.length);
  let result = {
    size,
    groups: groups.length,
  };
  return result;
}

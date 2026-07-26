import { claude_md_names } from "./claude_md_names.mjs";
import { function_name_to_path_unalias } from "./function_name_to_path_unalias.mjs";
import { property_get } from "./property_get.mjs";
import { equal_not } from "./equal_not.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { each_unordered_async } from "./each_unordered_async.mjs";
export async function claude_md_name_defects() {
  "Lists the names the instructions file tells a Claude to run that the ai seam would refuse";
  "Either no such function exists, or the name is a shorthand the seam turns away, and each one is a crash waiting for whoever follows the instructions";
  let names = await claude_md_names();
  let defects = [];
  async function lambda(name) {
    let r = await function_name_to_path_unalias(name);
    let exists = property_get(r, "exists");
    let unaliased = property_get(r, "unaliased");
    let missing = not(exists);
    if (missing) {
      list_add(defects, {
        name,
        reason: "no such function",
      });
      return;
    }
    let shorthand = equal_not(name, unaliased);
    if (shorthand) {
      list_add(defects, {
        name,
        reason: "shorthand, the seam only takes full names",
        unaliased,
      });
    }
  }
  await each_unordered_async(names, lambda);
  let v = {
    checked: names.length,
    defects,
  };
  return v;
}

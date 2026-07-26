import { functions_shadowing } from "./functions_shadowing.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_shadowing_report() {
  "prints every shadowed name in the repo, one line per offending function per rule, then the two totals — the reading a person needs before deciding which of the two rules is worth clearing first.";
  let offenders = await functions_shadowing();
  let duplicated_count = 0;
  let shadowed_count = 0;
  for (let offender of offenders) {
    let name = property_get(offender, "name");
    let duplicated = property_get(offender, "duplicated");
    let shadowed = property_get(offender, "shadowed");
    let any_duplicated = greater_than(duplicated.length, 0);
    if (any_duplicated) {
      duplicated_count = duplicated_count + 1;
      console.log(
        "BOUND TWICE  " + name + "  -> " + list_join_comma(duplicated),
      );
    }
    let any_shadowed = greater_than(shadowed.length, 0);
    if (any_shadowed) {
      shadowed_count = shadowed_count + 1;
      console.log("SHADOWS FN   " + name + "  -> " + list_join_comma(shadowed));
    }
  }
  let counts = {
    bound_twice: duplicated_count,
    shadows_function: shadowed_count,
  };
  return counts;
}

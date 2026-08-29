import { functions_parameters_counts } from "./functions_parameters_counts.mjs";
import { functions_parameters_ceiling } from "./functions_parameters_ceiling.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_parameters_oversize_names() {
  "The functions asking a caller to line up more things than the ceiling allows, by name.";
  "The ceiling is read where the measuring happens rather than at the gate, so the gate and anybody asking the question by hand cannot be measuring against two different numbers - which is the way a ceiling quietly stops meaning anything.";
  "Only the names come back, because a name here is a job rather than a fact: the row is collapsed with one command, and the number it happened to be beforehand changes nothing about what to do. Ask the ranked reading beside this when the number is what you want.";
  let counted = await functions_parameters_counts();
  let ceiling = functions_parameters_ceiling();
  let over = [];
  for (let entry of counted) {
    let count = property_get(entry, "count");
    let above = greater_than(count, ceiling);
    if (above) {
      let name = property_get(entry, "name");
      list_add(over, name);
    }
  }
  return over;
}

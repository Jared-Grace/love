import { arguments_assert } from "./arguments_assert.mjs";
import { functions_parameters_counts } from "./functions_parameters_counts.mjs";
import { functions_parameters_ceiling } from "./functions_parameters_ceiling.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
export async function functions_parameters_oversize_walked() {
  arguments_assert(arguments, 0);
  ("The functions asking a caller to line up more things than the ceiling allows, by name, beside how many functions were measured to find them.");
  ("The ceiling is read where the measuring happens rather than at the gate, so the gate and anybody asking the question by hand cannot be measuring against two different numbers - which is the way a ceiling quietly stops meaning anything.");
  ("Only the names come back among the offenders, because a name here is a job rather than a fact: the row is collapsed with one command, and the number it happened to be beforehand changes nothing about what to do. Ask the ranked reading beside this when the number is what you want.");
  ("HOW MANY WERE MEASURED IS THE HALF THE GATE ABOVE CANNOT GET ANY OTHER WAY. That gate is green by naming nobody new, and naming nobody new is also what it does on the day the reading under it has been pointed at a list that is no longer built the way it was. The offenders cannot tell those apart - there are none of them in both cases. A count of what was walked falls to nothing in the second and stays whole in the first.");
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
  let walked = list_size(counted);
  let r = {
    walked,
    over,
  };
  return r;
}

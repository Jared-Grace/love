import { functions_selects_unsafe_params } from "./functions_selects_unsafe_params.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function functions_selects_unsafe_names() {
  "Just the names of the transforms that can be handed a written line of code.";
  "The sweep answers which parameter did it as well, which is what a person reading the report wants and what a ratchet must not hold - a baseline keyed on the reason would go stale the moment a parameter was renamed, and say the opening had moved when nothing about it had.";
  "The gate and the writer both need exactly this list, and they must not each derive it, because a ratchet whose two halves disagree about what they are counting refuses the wrong things.";
  let offenders = await functions_selects_unsafe_params();
  let names = list_map_property(offenders, "name");
  return names;
}

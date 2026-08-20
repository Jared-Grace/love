import { property_list_map_property } from "./property_list_map_property.mjs";
import { functions_selects_unsafe_params_walked } from "./functions_selects_unsafe_params_walked.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_selects_unsafe_names_walked() {
  "Just the names of the transforms that can be handed a written line of code, and how many functions were opened to say so.";
  "The sweep answers which parameter did it as well, which is what a person reading the report wants and what a ratchet must not hold - a baseline keyed on the reason would go stale the moment a parameter was renamed, and say the opening had moved when nothing about it had.";
  "The gate and the writer both need exactly this list, and they must not each derive it, because a ratchet whose two halves disagree about what they are counting refuses the wrong things.";
  "The count is carried through rather than worked out here. Nothing on this side of the walk knows how many functions were opened, and the two numbers that could be reached from here - the length of this list, the size of the record it is measured against - both stay exactly the same on the run where the walk went blind, which is the run they would be wanted for.";
  let told = await functions_selects_unsafe_params_walked();
  let walked = property_get(told, "walked");
  let names = property_list_map_property(told, "offenders", "name");
  let r = {
    walked,
    offenders: names,
  };
  return r;
}

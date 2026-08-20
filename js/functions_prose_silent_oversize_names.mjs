import { property_list_map_property } from "./property_list_map_property.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { functions_prose_silent_oversize_walked } from "./functions_prose_silent_oversize_walked.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_prose_silent_oversize_names() {
  "The names of the functions too big to be read off their own name that say nothing about themselves, with how many functions were measured to find them.";
  "The list a person reads carries each function's size beside it so the reading can start at the worst one. A ratchet cannot hold sizes: a function that grows by a line would read as a name gone and a name arrived, and the gate would go red on a change that altered nothing about whether it speaks.";
  arguments_assert(arguments, 0);
  let told = await functions_prose_silent_oversize_walked();
  let walked = property_get(told, "walked");
  let names = property_list_map_property(told, "silent", "name");
  let r = {
    walked,
    names,
  };
  return r;
}

import { list_is } from "./list_is.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
export function gloss_values_placed(explains) {
  "The wording waiting for one passage of a gloss, said as a flat list of pairs - where an explanation stands, and what it is to say - whichever of the two shapes it was handed over in.";
  "Wording arrives either as a whole passage in order or as the few explanations being mended, named by their standing. Both say the same thing about the same passage, so a reading that only wants to know which standings are spoken for should not have to be written twice; the difference belongs here and nowhere above it.";
  "A whole list takes its standings from its own order, because that is the only place they are recorded in that shape. Nothing here checks that the list is as long as the passage - that is a judgment about a particular passage, and this is asked before any passage is in hand.";
  let whole = list_is(explains);
  if (whole) {
    function index_place(explain, index) {
      let placed = {
        index,
        explain,
      };
      return placed;
    }
    let r = list_map_index(explains, index_place);
    return r;
  }
  function name_place(name) {
    let explain = property_get(explains, name);
    let placed = {
      index: number_from_text(name),
      explain,
    };
    return placed;
  }
  let names = object_property_names(explains);
  let r2 = list_map(names, name_place);
  return r2;
}

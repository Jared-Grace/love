import { list_is } from "./list_is.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
export function gloss_values_placed(values) {
  "The text waiting for one part of the words of a passage of a gloss, said as a flat list of pairs - where a word stands, and what that part of its row is to say - whichever of the two shapes it was handed over in.";
  "Text arrives either as a whole passage in order or as the few rows being mended, named by their standing. Both say the same thing about the same passage, so a reading that only wants to know which standings are spoken for should not have to be written twice; the difference belongs here and nowhere above it.";
  "A whole list takes its standings from its own order, because that is the only place they are recorded in that shape. Nothing here checks that the list is as long as the passage - that is a judgment about a particular passage, and this is asked before any passage is in hand.";
  "Which part of a row the text belongs to is never asked, because the two shapes it can arrive in are the same shapes whichever part it is: the prose beside a word and the short English under it are handed over alike. So the pair says only where and what, and the caller that knows which part it asked for is the one that names it.";
  let whole = list_is(values);
  if (whole) {
    function index_place(value, index) {
      let placed = {
        index,
        value,
      };
      return placed;
    }
    let r = list_map_index(values, index_place);
    return r;
  }
  function name_place(name) {
    let value = property_get(values, name);
    let placed = {
      index: number_from_text(name),
      value,
    };
    return placed;
  }
  let names = object_property_names(values);
  let r2 = list_map(names, name_place);
  return r2;
}

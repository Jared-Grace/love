import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function gloss_row_sightings(row) {
  "How many times a gathered gloss row was met, taken off the row so that a ranking can be asked for by name.";
  "Every reading over the gloss store that gathers rows and then ranks them wrote this out for itself, fourteen times over, under three different names and with the local called three different things. It is the same three lines every time because the field is the same field: the gatherers all record how often each word or root was seen, and a reader of a fault list wants the worst first.";
  "It is separate from the gatherers on purpose. A ranking is asked for at the far end of a reading, long after the record was built, and the only thing it needs is the one number - so a name for that number costs a reading one import and takes a function declaration out of its middle.";
  arguments_assert(arguments, 1);
  let seen = property_get(row, "sightings");
  return seen;
}

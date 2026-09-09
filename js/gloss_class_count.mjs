import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function gloss_class_count(one_class) {
  "$plain one_class";
  "How many sightings a gathered gloss class holds, taken off the class so that a ranking can be asked for by name.";
  "A class is a wording met on more than one word, and every reading that gathers classes and then hands a person a queue of them wants the commonest first, because mending the commonest wording mends the most prose. So each of those readings declared the same one-line mapper in its own middle under the same local name.";
  ("It is the class-shaped twin of ",
    fn_name("gloss_row_sightings"),
    ", which does the same for a gathered row. The two are kept apart rather than folded together because the field is not the same field - a row records sightings and a class records count - and a single mapper would have had to guess which one it was handed.");
  arguments_assert(arguments, 1);
  let count = property_get(one_class, "count");
  return count;
}

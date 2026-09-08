import { arguments_assert } from "./arguments_assert.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { gloss_row_sightings } from "./gloss_row_sightings.mjs";
export function gloss_rows_ranked(holder) {
  "Everything a gathering recorded, taken out from under the words it was filed by and put worst first.";
  "The last thing every reading over the gloss store does before it answers. A gatherer files what it finds under the word or the root it belongs to, because that is how it recognises a second sighting of the same thing; a person reading the answer wants none of that filing and only wants the worst offender at the top. The two shapes are so far apart in purpose that the turn between them was written out again in every reading that needed it.";
  "The keys are dropped rather than carried alongside, and that is safe here because a gatherer already writes the word into the row it files. Carrying them would hand the reader the same word twice and give the next writer a choice about which of the two to trust.";
  "Worst first is the only order offered. A reading that wanted the mildest first would be asking a different question, and would be reading a fault list backwards.";
  arguments_assert(arguments, 1);
  let names = object_property_names(holder);
  let listed = [];
  function name_read(name) {
    let row = property_get(holder, name);
    list_add(listed, row);
  }
  each(names, name_read);
  list_sort_number_mapper_reverse(listed, gloss_row_sightings);
  return listed;
}

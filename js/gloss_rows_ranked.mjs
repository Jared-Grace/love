import { arguments_assert } from "./arguments_assert.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { gloss_row_sightings } from "./gloss_row_sightings.mjs";
export function gloss_rows_ranked(holder) {
  "Everything a gathering recorded, taken out from under the words it was filed by and put worst first.";
  "The last thing every reading over the gloss store does before it answers. A gatherer files what it finds under the word or the root it belongs to, because that is how it recognises a second sighting of the same thing; a person reading the answer wants none of that filing and only wants the worst offender at the top. The two shapes are so far apart in purpose that the turn between them was written out again in every reading that needed it.";
  "The keys are dropped rather than carried alongside, and that is safe here because a gatherer already writes the word into the row it files. Carrying them would hand the reader the same word twice and give the next writer a choice about which of the two to trust.";
  "Worst first is the only order offered. A reading that wanted the mildest first would be asking a different question, and would be reading a fault list backwards.";
  "★ THE WORDING OF THIS BODY IS LOAD-BEARING, THOUGH NOTHING IT DOES IS. A run of lines is pointed at a function that already writes them out by cutting the run into a function and holding the two side by side, and what that holds them by is the text - so the two ways of turning a record into a list of its values, gathering into a list and mapping over the names, read as different work however plainly they are not. Written the way the callers were already written, six became one; written the other way, four of them could not be reached at all.";
  arguments_assert(arguments, 1);
  let names = object_property_names(holder);
  function name_row(name) {
    let row = property_get(holder, name);
    return row;
  }
  let rows = list_map(names, name_row);
  let ranked = list_sort_number_mapper_reverse(rows, gloss_row_sightings);
  return ranked;
}

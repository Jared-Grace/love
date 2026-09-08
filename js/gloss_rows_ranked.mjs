import { arguments_assert } from "./arguments_assert.mjs";
import { object_values } from "./object_values.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { gloss_row_sightings } from "./gloss_row_sightings.mjs";
export function gloss_rows_ranked(holder) {
  "Everything a gathering recorded, taken out from under the words it was filed by and put worst first.";
  "The last thing every reading over the gloss store does before it answers. A gatherer files what it finds under the word or the root it belongs to, because that is how it recognises a second sighting of the same thing; a person reading the answer wants none of that filing and only wants the worst offender at the top. The two shapes are so far apart in purpose that the turn between them was written out again in every reading that needed it.";
  "The keys are dropped rather than carried alongside, and that is safe here because a gatherer already writes the word into the row it files. Carrying them would hand the reader the same word twice and give the next writer a choice about which of the two to trust.";
  "Worst first is the only order offered. A reading that wanted the mildest first would be asking a different question, and would be reading a fault list backwards.";
  "★ THE GATHERING HALF OF THIS WAS WRITTEN OUT BY HAND HERE BEFORE IT WAS LOOKED FOR. Taking a record's values as a list is one call and always was, and this body walked the names and fetched each one instead, because the words it was looked for under were the words this repo uses for names and not the word it is filed under. A helper searched for and not found is a statement about the search; ask again in the writer's words before writing the thing.";
  "★ ITS TEXT DECIDES WHAT CAN STILL BE FOLDED ONTO IT. A run of lines is pointed at a function that already does that work by cutting the run out and holding the two side by side, and what holds them side by side is the text - so a caller that gathers into a list and one that maps over the names read as different work however plainly they are not. Six callers were reached while this was written the long way; a caller still written the long way now has to be shortened rather than folded.";
  arguments_assert(arguments, 1);
  let rows = object_values(holder);
  let ranked = list_sort_number_mapper_reverse(rows, gloss_row_sightings);
  return ranked;
}

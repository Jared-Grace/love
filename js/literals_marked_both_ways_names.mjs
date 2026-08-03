import { literals_marked_both_ways } from "./literals_marked_both_ways.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function literals_marked_both_ways_names() {
  "Just the words that are marked both ways, with the files they were found in left off. Read-only.";
  "The ratchet beside this one measures a flat list of names, and the writer that seeds it measures the same list, so the narrowing is named once here rather than once in each of them.";
  "The word is the unit rather than the pair of sites, because the contradiction belongs to the word. Moving the freeze to a second file does not settle anything, and a record keyed on where the word was found would read that move as a repair.";
  let conflicts = await literals_marked_both_ways();
  let words = list_map_property(conflicts, "word");
  return words;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { functions_duplicates } from "./functions_duplicates.mjs";
import { functions_head_duplicates } from "./functions_head_duplicates.mjs";
import { functions_head_duplicates_size } from "./functions_head_duplicates_size.mjs";
import { functions_tail_duplicates } from "./functions_tail_duplicates.mjs";
import { functions_tail_duplicates_size } from "./functions_tail_duplicates_size.mjs";
import { functions_inside_duplicates } from "./functions_inside_duplicates.mjs";
import { functions_inside_duplicates_size } from "./functions_inside_duplicates_size.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_unique } from "./list_unique.mjs";
export async function functions_duplicates_any_names() {
  "Every function that shares a shape with some other function by any of the four readings - the whole body, the opening, the ending, or a run somewhere inside.";
  "The mark that says two functions are alike on purpose is honoured by all four, so the question of whether a mark still has anything to be about has to be asked of all four as well. Asked of the whole-body reading alone it says no about a mark placed over a shared middle, which is a live mark reported as dead - and the instruction that comes with the report is to take it off, which would put the group back in front of the next reader as an accusation they had already answered.";
  "The four readings are asked again here rather than read off the records they feed, because a record holds groups nobody has marked, and a marked group is exactly the one this needs to see.";
  arguments_assert(arguments, 0);
  let whole = await functions_duplicates();
  let head_size = functions_head_duplicates_size();
  let head = await functions_head_duplicates(head_size);
  let tail_size = functions_tail_duplicates_size();
  let tail = await functions_tail_duplicates(tail_size);
  let inside_size = functions_inside_duplicates_size();
  let inside = await functions_inside_duplicates(inside_size);
  let groups = list_concat_multiple([whole, head, tail, inside]);
  let name_lists = list_map_property(groups, "names");
  let names = list_concat_multiple(name_lists);
  let once = list_unique(names);
  return once;
}

import { functions_duplicate_words_unmarked } from "./functions_duplicate_words_unmarked.mjs";
import { functions_tail_duplicates_size } from "./functions_tail_duplicates_size.mjs";
import { functions_tail_duplicates } from "./functions_tail_duplicates.mjs";
import { functions_duplicate_group_names } from "./functions_duplicate_group_names.mjs";
export async function functions_tail_duplicate_names() {
  "name every group of functions that end in the same run of work, one flat word to a group, so a ratchet can hold them";
  "a group every member of which is marked as alike on purpose is not named, because there is nothing here for a ratchet to hold: the shared ending is the point of the mark, and a record that carried the group would be asking for the one collapse the mark exists to refuse";
  let size = functions_tail_duplicates_size();
  let groups = await functions_tail_duplicates(size);
  let named = functions_duplicate_group_names(groups);
  let unmarked = await functions_duplicate_words_unmarked(named);
  return unmarked;
}

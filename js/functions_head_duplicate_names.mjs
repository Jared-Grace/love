import { functions_head_duplicates_size } from "./functions_head_duplicates_size.mjs";
import { functions_head_duplicates } from "./functions_head_duplicates.mjs";
import { functions_duplicate_group_names } from "./functions_duplicate_group_names.mjs";
export async function functions_head_duplicate_names() {
  "name every group of functions that begin with the same run of work, one flat word to a group, so a ratchet can hold them";
  "a group every member of which is marked as alike on purpose is not named, because there is nothing here for a ratchet to hold: the shared opening is the point of the mark, and a record that carried the group would be asking for the one collapse the mark exists to refuse";
  let size = functions_head_duplicates_size();
  let groups = await functions_head_duplicates(size);
  let named = functions_duplicate_group_names(groups);
  let unmarked = await functions_duplicate_words_unmarked(named);
  return unmarked;
}

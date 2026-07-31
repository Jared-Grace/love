import { functions_tail_duplicates_size } from "./functions_tail_duplicates_size.mjs";
import { functions_tail_duplicates } from "./functions_tail_duplicates.mjs";
import { functions_duplicate_group_names } from "./functions_duplicate_group_names.mjs";
export async function functions_tail_duplicate_names() {
  "name every group of functions that end in the same run of work, one flat word to a group, so a ratchet can hold them";
  let size = functions_tail_duplicates_size();
  let groups = await functions_tail_duplicates(size);
  let named = functions_duplicate_group_names(groups);
  return named;
}

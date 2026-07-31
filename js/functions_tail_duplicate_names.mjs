import { functions_tail_duplicates } from "./functions_tail_duplicates.mjs";
import { functions_tail_duplicates_size } from "./functions_tail_duplicates_size.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
export async function functions_tail_duplicate_names() {
  "name every group of functions that end in the same run of work, one flat word to a group, so a ratchet can hold them";
  "the word is the group's own members joined, because that is the only thing about a group that stays put - the shared ending itself is code, and reformatting it would read as a new offence while nothing had changed";
  "so collapsing a group makes its word disappear rather than change, which is what the record's other tooth is watching for";
  let size = functions_tail_duplicates_size();
  let groups = await functions_tail_duplicates(size);
  function group_name(group) {
    let names = property_get(group, "names");
    let joined = list_join_comma(names);
    return joined;
  }
  let named = list_map(groups, group_name);
  return named;
}

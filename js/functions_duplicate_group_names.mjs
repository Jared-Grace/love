import { property_list_join_comma } from "./property_list_join_comma.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
export function functions_duplicate_group_names(groups) {
  arguments_assert(arguments, 1);
  ("name every group of functions sharing a run of work, one flat word to a group, so a ratchet can hold them");
  ("the word is the group's own members joined, because that is the only thing about a group that stays put - the shared run itself is code, and reformatting it would read as a new offence while nothing had changed");
  ("so collapsing a group makes its word disappear rather than change, which is what the record's other tooth is watching for");
  function group_name(group) {
    let joined = property_list_join_comma(group, "names");
    return joined;
  }
  let named = list_map(groups, group_name);
  return named;
}

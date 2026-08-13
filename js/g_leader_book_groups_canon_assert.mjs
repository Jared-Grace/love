import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { g_leader_book_groups } from "./g_leader_book_groups.mjs";
import { list_map_concat_multiple } from "./list_map_concat_multiple.mjs";
import { ebible_book_codes } from "./ebible_book_codes.mjs";
import { lists_equal_pair } from "./lists_equal_pair.mjs";
import { assert_json } from "./assert_json.mjs";
export function g_leader_book_groups_canon_assert() {
  "QA gate: prove the leader arc groups cover the whole 66-book canon exactly, in canonical order, once each.";
  "ONE COMPARISON CATCHES EVERY WAY THE MERGE LIST CAN BE WRONG, because a flattened list of the groups has to be the canon itself. A misspelt book code leaves a phantom run and drops the real book; a run whose books are not adjacent in the canon comes out in the wrong order; a book named in two runs comes out twice. All three show as the same mismatch.";
  "It is worth a gate because the failure is SILENT and it undoes exactly what the merge was for. Misspell one code in the merge list and Jude quietly stands alone again at 11.4 uses of each passage against a leader's 216 turns - nothing throws, nothing looks wrong, and the group is simply back to the size the merge existed to fix.";
  let groups = g_leader_book_groups();
  function group_codes(group) {
    return group;
  }
  let flat = list_map_concat_multiple(groups, group_codes);
  let canon = ebible_book_codes();
  let same = lists_equal_pair(flat, canon);
  let f_name = fn_name("g_leader_book_groups_merged");
  assert_json(same, {
    flat,
    canon,
    hint: text_combine_multiple([
      "the leader arc groups must cover the whole canon exactly and in order; a mismatch means a book code in ",
      f_name,
      " is misspelt, named twice, or names books that are not adjacent in canonical order",
    ]),
  });
}

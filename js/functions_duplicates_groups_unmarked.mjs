import { arguments_assert } from "./arguments_assert.mjs";
import { duplicate_kind_parallel } from "./duplicate_kind_parallel.mjs";
import { functions_duplicates_group_kind } from "./functions_duplicates_group_kind.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_duplicates_groups_unmarked(mutual) {
  "The pairs written as each other's definition that nobody has marked as alike on purpose.";
  "A pair that folds both ways is normally one idea written twice, and the answer is to keep one name. It is not always: two questions can be the same arithmetic asked of different arguments, and then the names and the prose around them are the whole difference. The mark a person writes in a body is the only thing that can tell those apart, because nothing about the shape can.";
  "The mark is asked of the group rather than of one member, by the reader that already decides this for same-shaped functions, so a pair where only one twin carries it is still reported. Half a mark is not a decision, and putting it in front of a person is the point.";
  "Reading the mark here rather than adding a record of known pairs keeps one answer in one place. A pair recorded somewhere else would say the same thing as the mark and could disagree with it, and the mark is the half a reader of the body can see.";
  arguments_assert(arguments, 1);
  let parallel = duplicate_kind_parallel();
  let unmarked = [];
  for (let pair of mutual) {
    let kind = await functions_duplicates_group_kind(pair);
    let meant = equal(kind, parallel);
    if (meant) {
      continue;
    }
    list_add(unmarked, pair);
  }
  return unmarked;
}

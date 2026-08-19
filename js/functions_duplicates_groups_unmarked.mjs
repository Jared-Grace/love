import { arguments_assert } from "./arguments_assert.mjs";
import { duplicate_kind_parallel } from "./duplicate_kind_parallel.mjs";
import { functions_duplicates_group_kind } from "./functions_duplicates_group_kind.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_duplicates_groups_unmarked(groups) {
  "Out of groups of functions found alike, the ones nobody has marked as alike on purpose.";
  "Functions found alike are normally one idea written more than once, and the answer is to keep one of them. It is not always: several questions can be the same arithmetic asked of different arguments, and then the names and the prose around them are the whole difference. The mark a person writes in a body is the only thing that can tell those apart, because nothing about the shape can.";
  "The mark is asked of the group rather than of one member, by the reader that already decides this for same-shaped functions, so a group where only some carry it is still reported. Half a mark is not a decision, and putting it in front of a person is the point.";
  "Reading the mark here rather than adding a record of known groups keeps one answer in one place. A group recorded somewhere else would say the same thing as the mark and could disagree with it, and the mark is the half a reader of the body can see.";
  "Four gates ask this - the one over functions written as each other's definition, and the three over a shared opening, ending and middle. A body marked as deliberately alike is alike at every one of those, so a mark honoured by one of them and not the others would leave whoever wrote it down still accused three times over for the same reason they had already answered.";
  arguments_assert(arguments, 1);
  let parallel = duplicate_kind_parallel();
  let unmarked = [];
  for (let group of groups) {
    let kind = await functions_duplicates_group_kind(group);
    let meant = equal(kind, parallel);
    if (meant) {
      continue;
    }
    list_add(unmarked, group);
  }
  return unmarked;
}

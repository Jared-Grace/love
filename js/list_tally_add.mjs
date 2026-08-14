import { arguments_assert } from "./arguments_assert.mjs";
import { add_1 } from "./add_1.mjs";
export function list_tally_add(tally, list) {
  "Counts a list into a tally that is already being kept, rather than making a new one.";
  "It is here so that a great many lists can be counted without any of them being kept. Pouring them all together first and counting once is the same answer, but it holds every value at the same moment - and a counting that asks about every group of four out of thirty-eight pooled twenty-one million of them, which is memory spent on numbers that were only ever going to be added up.";
  "It hands back the same tally it was given rather than a new one, so a caller reading the tally afterwards sees what was added.";
  "The property is reached for directly here rather than through the repo's own getting and setting, which is the one place around here that is worth doing. Those two check what they are handed, and the check costs about the same as the counting does - which is nothing at all until this is asked to count twenty-one million values, and forty minutes when it is. Nothing reaches this line but a value out of the list and a count this loop wrote itself, so there is nothing for a check to find.";
  arguments_assert(arguments, 2);
  for (let value of list) {
    let seen = tally[value];
    let already = seen ? seen : 0;
    tally[value] = add_1(already);
  }
  return tally;
}

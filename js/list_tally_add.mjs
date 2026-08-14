import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { add_1 } from "./add_1.mjs";
import { property_set } from "./property_set.mjs";
export function list_tally_add(tally, list) {
  "Counts a list into a tally that is already being kept, rather than making a new one.";
  "It is here so that a great many lists can be counted without any of them being kept. Pouring them all together first and counting once is the same answer, but it holds every value at the same moment - and a counting that asks about every group of four out of thirty-eight pooled twenty-one million of them, which is memory spent on numbers that were only ever going to be added up.";
  "It hands back the same tally it was given rather than a new one, so a caller reading the tally afterwards sees what was added.";
  arguments_assert(arguments, 2);
  for (let value of list) {
    let seen = property_get_or_null(tally, value);
    let already = null_is(seen) ? 0 : seen;
    let counted = add_1(already);
    property_set(tally, value, counted);
  }
  return tally;
}

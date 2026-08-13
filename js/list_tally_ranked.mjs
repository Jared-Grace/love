import { arguments_assert } from "./arguments_assert.mjs";
import { list_tally } from "./list_tally.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export function list_tally_ranked(list) {
  "How many times each item appears in a list, commonest first, each one a record carrying the item beside its count";
  "A tally on its own is an object, and an object has no order. Counting is almost always asked in order to find out what the most of something is, so the step from the tally to the ranking follows it nearly everywhere the tally is used, and belongs with it rather than being written again beside each one.";
  "Records rather than an object, because that is the shape that can be taken from, filtered and cut down without losing which count belongs to what.";
  arguments_assert(arguments, 1);
  let tally = list_tally(list);
  let rows = [];
  for (let value of object_property_names(tally)) {
    let count = tally[value];
    let row = {
      value,
      count,
    };
    list_add(rows, row);
  }
  function list_tally_ranked_count(row) {
    let n = row.count;
    return n;
  }
  let ranked = list_sort_number_mapper_reverse(rows, list_tally_ranked_count);
  return ranked;
}

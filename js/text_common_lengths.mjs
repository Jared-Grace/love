import { less_than_equal } from "./less_than_equal.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_add } from "./list_add.mjs";
export function text_common_lengths(before, after) {
  "$plain before";
  "$plain after";
  "How many characters two pieces of text still share from every pair of places in them onwards, as a table, which is what lets a reader of it walk forwards through both at once and always know which way keeps the most.";
  "IT IS FILLED FROM THE END SO THAT THE WALK CAN RUN FROM THE START. Filled the other way round the same table answers a walk that runs backwards, and the runs would then be handed back in the reverse of the order a person reads them in, so the drawing would have to turn them round again.";
  "IT IS A TABLE AND NOT A NUMBER, because how much is shared is not the question anybody is asking here. A single count says two lines differ without saying anywhere that they differ, and a reviewer looking at a line needs the where.";
  "THE LONGEST SHARED RUN IS TAKEN RATHER THAN THE FIRST ONE FOUND, which is what stops a line that only gained a capital letter and a full stop being called different the whole way along. Walking from both ends inwards would give up at the first character that disagreed and mark everything between as moved.";
  arguments_assert(arguments, 2);
  let before_size = before.length;
  let after_size = after.length;
  let table = [];
  let row_number = 0;
  while (less_than_equal(row_number, before_size)) {
    let row = [];
    let column_number = 0;
    while (less_than_equal(column_number, after_size)) {
      list_add(row, 0);
      column_number = column_number + 1;
    }
    list_add(table, row);
    row_number = row_number + 1;
  }
  let i = subtract(before_size, 1);
  while (greater_than_equal(i, 0)) {
    let j = subtract(after_size, 1);
    while (greater_than_equal(j, 0)) {
      let same = equal(before[i], after[j]);
      let count = 0;
      if (same) {
        count = table[i + 1][j + 1] + 1;
      }
      if (not(same)) {
        let without_before = table[i + 1][j];
        let without_after = table[i][j + 1];
        count = without_before;
        let after_keeps_more = greater_than(without_after, without_before);
        if (after_keeps_more) {
          count = without_after;
        }
      }
      table[i][j] = count;
      j = subtract(j, 1);
    }
    i = subtract(i, 1);
  }
  return table;
}

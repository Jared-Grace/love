import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { list_add } from "./list_add.mjs";
import { divide_round } from "./divide_round.mjs";
export function qa_promote_steps_row_read(row) {
  "$plain row";
  "One kept run of preparing an app, said in seconds, with the whole of its length beside its steps.";
  "The total is the steps added up because they run one after another, unlike the shares of a judging, which run side by side and so are finished when the slowest is.";
  arguments_assert(arguments, 1);
  let steps = property_get(row, "steps");
  let total_ms = 0;
  let steps_read = [];
  for (let step of steps) {
    let milliseconds = property_get(step, "milliseconds");
    total_ms = add(total_ms, milliseconds);
    list_add(steps_read, {
      name: property_get(step, "name"),
      seconds: divide_round(milliseconds, 1000),
      finished: property_get(step, "finished"),
    });
  }
  let read = {
    at: property_get(row, "at"),
    search: property_get(row, "search"),
    commit: property_get(row, "commit"),
    ok: property_get(row, "ok"),
    seconds: divide_round(total_ms, 1000),
    steps: steps_read,
  };
  return read;
}

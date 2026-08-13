import { permission_prompt_shaped_events } from "./permission_prompt_shaped_events.mjs";
import { permission_prompt_events_grouped_by } from "./permission_prompt_events_grouped_by.mjs";
import { permission_prompt_rows_verdicts } from "./permission_prompt_rows_verdicts.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
export async function permission_prompt_shape_commands(
  days,
  seconds_minimum,
  shape,
) {
  "the distinct commands behind one row of the shape ranking, each with what the guard decides about it today";
  "the ranking checks one command per row, which is the right cost for reading a dozen rows and the wrong answer for asking whether a fix reached anything. a row is a group, and a group's one sample can carry an unrelated ungranted verb - so a fix that freed most of a hundred interruptions still reads as no change at all. this asks every distinct command in one group instead, which is minutes rather than seconds and worth it exactly once per fix.";
  "grouping by the command itself rather than by the shape, through the same counter, so the count against each line is how many times that exact command cost somebody an interruption.";
  let shaped = await permission_prompt_shaped_events(days, seconds_minimum);
  let matching = [];
  for (let event of shaped) {
    let found = property_get(event, "shape");
    let same = equal(found, shape);
    if (same) {
      list_add(matching, event);
    }
  }
  let rows = permission_prompt_events_grouped_by(matching, "command");
  let checked = await permission_prompt_rows_verdicts(rows);
  return checked;
}

import { list_map } from "./list_map.mjs";
import { list_sum } from "./list_sum.mjs";
import { property_get } from "./property_get.mjs";
export function permission_replay_summary(rows) {
  "how many distinct command shapes a group of replayed rows holds and how many runs those shapes account for between them";
  "both numbers are wanted wherever one group of shapes is set beside another. shapes alone says how much reading a group is worth, and runs says what it costs the human, and a group can easily be large in one and small in the other — one shape run four hundred times is the whole of a morning and forty shapes run once each are an afternoon nobody will repeat.";
  function runs_of(row) {
    let n = property_get(row, "count");
    return n;
  }
  let counts = list_map(rows, runs_of);
  let runs = list_sum(counts);
  let summary = {
    shapes: rows.length,
    runs,
  };
  return summary;
}

import { subtract } from "./subtract.mjs";
import { permission_replay_rows_split } from "./permission_replay_rows_split.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { list_slice_count } from "./list_slice_count.mjs";
import { permission_prompt_rows_verdicts } from "./permission_prompt_rows_verdicts.mjs";
import { permission_rows_unsolved } from "./permission_rows_unsolved.mjs";
import { list_map } from "./list_map.mjs";
import { permission_replay_report_row } from "./permission_replay_report_row.mjs";
export async function permission_replay_reading_checked() {
  "The daily prompt reading with every row it is about to show put back to the guard first, so what it says is what the rules decide today rather than what they decided when the record was written.";
  "A verdict in the record is a day old at best and the rules move faster than that. On 2026-08-19 the three loudest shapes in the replayed ranking - a gate run at fifty two, the commit command at eighty, another gate at twenty - had all been granted since the record was written and all three still read as work to do. A whole turn went into them.";
  "It costs a process per row and the plain reading does not, which is why this is a second command rather than the same one. The plain reading is asked at the start of every session by something that speaks one line; this is asked by somebody who came to act on it, and a few seconds is nothing beside going at a row that was already answered.";
  "Only the dozen rows that would have been shown are re-asked, and a row the guard now allows is dropped rather than shown with a corrected verdict. Anything else would rank an answered thing among the unanswered, which is the whole fault being fixed.";
  let split = await permission_replay_rows_split();
  let written = property_get(split, "written");
  let missing = not(written);
  if (missing) {
    return split;
  }
  let proved_alive = property_get(split, "proved_alive");
  let replayed_alive = property_get(split, "replayed_alive");
  let shown = list_slice_count(proved_alive, 0, 12);
  let shown_replayed = list_slice_count(replayed_alive, 0, 12);
  await permission_prompt_rows_verdicts(shown);
  await permission_prompt_rows_verdicts(shown_replayed);
  let standing = permission_rows_unsolved(shown);
  let standing_replayed = permission_rows_unsolved(shown_replayed);
  let r = {
    path: property_get(split, "path"),
    written: true,
    days: property_get(split, "days"),
    checked: shown.length + shown_replayed.length,
    solved_since:
      subtract(shown.length, standing.length) +
      subtract(shown_replayed.length, standing_replayed.length),
    replayed: list_map(standing_replayed, permission_replay_report_row),
    proved_rows: list_map(standing, permission_replay_report_row),
  };
  return r;
}

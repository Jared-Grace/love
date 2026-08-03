import { arguments_assert } from "./arguments_assert.mjs";
import { folder_read } from "./folder_read.mjs";
import { process_own_id } from "./process_own_id.mjs";
import { process_command_line_or_null } from "./process_command_line_or_null.mjs";
import { process_line_sleep_loop_is } from "./process_line_sleep_loop_is.mjs";
import { process_alive_seconds_or_null } from "./process_alive_seconds_or_null.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { round } from "./round.mjs";
export async function processes_sleep_loop_waiting() {
  arguments_assert(arguments, 0);
  ("Every process running a loop that waits by sleeping, oldest first, with how");
  ("long it has been at it.");
  ("Its neighbour asks the same question of a narrower set: only of processes whose");
  ("line names one of this repo's runs. That misses the waiter that watches a FILE,");
  ("since a file has no name of ours in it - and on the day this was written that");
  ("was the oldest one there was, twenty hours on a file that fills only when the");
  ("run it belongs to ends, from a run that had already died. So the net is cast on");
  ("the shape of the waiting instead of on what is waited for.");
  ("Never the one asking. A report that named its own asker would say a session had");
  ("stopped every time somebody checked whether one had.");
  ("How long is reported and no limit is set here, the same as its neighbour: a");
  ("loop a moment old is doing exactly its job, and where the line falls between");
  ("that and stopped is a judgment for whoever reads this. Ending somebody else's");
  ("shell is theirs to make too, which is why nothing here ends anything.");
  let entries = await folder_read("/proc");
  let mine = process_own_id();
  let waiting = [];
  for (let entry of entries) {
    let own = equal(entry, mine);
    if (own) {
      continue;
    }
    let line = process_command_line_or_null(entry);
    if (null_is(line)) {
      continue;
    }
    let sleeping = process_line_sleep_loop_is(line);
    if (not(sleeping)) {
      continue;
    }
    ("A process that ended between being listed and being asked about answers");
    ("nothing, and is simply left out. It is no longer anybody's problem.");
    let alive = process_alive_seconds_or_null(entry);
    if (null_is(alive)) {
      continue;
    }
    let row = {
      pid: entry,
      alive_seconds: round(alive),
      line,
    };
    list_add(waiting, row);
  }
  function lambda_alive(row) {
    let alive_seconds = property_get(row, "alive_seconds");
    return alive_seconds;
  }
  let ranked = list_sort_number_mapper_reverse(waiting, lambda_alive);
  return ranked;
}

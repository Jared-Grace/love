import { arguments_assert } from "./arguments_assert.mjs";
import { processes_dispatcher_lines } from "./processes_dispatcher_lines.mjs";
import { property_get } from "./property_get.mjs";
import { process_line_node_is } from "./process_line_node_is.mjs";
import { process_alive_seconds_or_null } from "./process_alive_seconds_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { round } from "./round.mjs";
export async function processes_dispatcher_waiting() {
  arguments_assert(arguments, 0);
  ("Every process that is not one of this repo's runs but carries one in its own");
  ("line - which is what a shell waiting on a run looks like, with how long it has");
  ("been at it.");
  ("Its neighbour throws these away on purpose, because they are not what the repo");
  ("is running. But they are what somebody is stuck on, and that has gone unseen:");
  ("eight of them were found alive at once, the oldest for five hours and thirteen");
  ("minutes, every one of them a Claude that had stopped.");
  ("They are invisible to the runaway net as well, and for the opposite reason to");
  ("the one it was built for. That net asks for a long life AND most of it spent on");
  ("a processor, because working hard for a long time means stuck rather than busy.");
  ("A shell asleep in a loop uses nothing at all, so it passes the second question");
  ("by being idle - which is precisely the shape of the problem.");
  ("Why they stick is worth saying, because the shape recurs. A waiter usually asks");
  ("whether the thing it waits for is running by searching command lines for its");
  ("name - and the waiter's own line contains that name, so it finds itself and the");
  ("answer is yes forever. Two of them together keep each other alive the same way.");
  ("How long is reported and no limit is set here. A waiter a moment old is doing");
  ("exactly its job, and where the line is between that and stuck is a judgment for");
  ("whoever reads this.");
  let named = await processes_dispatcher_lines();
  let waiting = [];
  for (let process of named) {
    let line = property_get(process, "line");
    let node_is = process_line_node_is(line);
    if (node_is) {
      continue;
    }
    let pid = property_get(process, "pid");
    let alive = process_alive_seconds_or_null(pid);
    ("A process that ended between being listed and being asked about answers");
    ("nothing, and is simply left out. It is no longer anybody's problem.");
    if (null_is(alive)) {
      continue;
    }
    let row = {
      pid,
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

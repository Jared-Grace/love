import { multiply_round } from "./multiply_round.mjs";
import { processes_dispatcher_running } from "./processes_dispatcher_running.mjs";
import { process_cpu_seconds_or_null } from "./process_cpu_seconds_or_null.mjs";
import { process_alive_seconds_or_null } from "./process_alive_seconds_or_null.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { null_is } from "./null_is.mjs";
import { greater_than } from "./greater_than.mjs";
import { divide } from "./divide.mjs";
import { round } from "./round.mjs";
export async function processes_dispatcher_report() {
  "Every process this repo has running, with how long it has been alive, how much of a processor it has actually used, and what share of that life it spent working - the hardest working first.";
  "This is the question anybody asks when the machine feels slow, and until now it was asked by remembering a line of ps and reading the columns by eye. A name means it can be asked the same way twice, and that what counts as an answer is written down once rather than recalled.";
  "The share is the telling number, not the time. A watcher alive all day and a prompt waiting to be typed at have both been alive far longer than anything else here and have used almost none of a processor between them; something going in a circle uses nearly all of one for as long as it is left alone.";
  let found = await processes_dispatcher_running();
  let rows = [];
  for (let running of found) {
    let pid = property_get(running, "pid");
    let line = property_get(running, "line");
    let cpu = process_cpu_seconds_or_null(pid);
    let alive = process_alive_seconds_or_null(pid);
    ("A process that ended between being listed and being asked about answers nothing, and is simply left out. It is no longer anybody's problem.");
    if (null_is(cpu)) {
      continue;
    }
    if (null_is(alive)) {
      continue;
    }
    let share = 0;
    let lived = greater_than(alive, 0);
    if (lived) {
      share = divide(cpu, alive);
    }
    let top = multiply_round(share, 100);
    let row = {
      pid,
      line,
      cpu_seconds: round(cpu),
      alive_seconds: round(alive),
      share: divide(top, 100),
    };
    list_add(rows, row);
  }
  function lambda_cpu(row) {
    let cpu_seconds = property_get(row, "cpu_seconds");
    return cpu_seconds;
  }
  let ranked = list_sort_number_mapper_reverse(rows, lambda_cpu);
  return ranked;
}

import { process_stat_fields_or_null } from "./process_stat_fields_or_null.mjs";
import { machine_clock_ticks_a_second } from "./machine_clock_ticks_a_second.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { list_get } from "./list_get.mjs";
import { null_is } from "./null_is.mjs";
import { add } from "./add.mjs";
import { divide } from "./divide.mjs";
export function process_cpu_seconds_or_null(pid) {
  "How many seconds of a processor a running process has actually used, or nothing when there is no such process or it is not ours to look at.";
  "Its own work only. The machine also records what its children used, and that is deliberately left out: every child is a running process in its own right and answers here for itself, so counting both would count the same work twice.";
  "This is what tells a stuck program apart from a patient one. A prompt left open all day and a watcher waiting on a folder have been alive for hours and used almost nothing; the one that measured two days and twenty hours of a processor had been going in a circle since the folder it was reading was deleted underneath it.";
  let fields = process_stat_fields_or_null(pid);
  if (null_is(fields)) {
    return null;
  }
  ("The eleventh and twelfth of these are the time spent on the process's own work and the time spent on the machine's work for it. Together they are what a processor gave it.");
  let user_text = list_get(fields, 11);
  let system_text = list_get(fields, 12);
  let user = number_from_text(user_text);
  let system = number_from_text(system_text);
  let ticks = add(user, system);
  let a_second = machine_clock_ticks_a_second();
  let seconds = divide(ticks, a_second);
  return seconds;
}

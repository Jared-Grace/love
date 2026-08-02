import { process_stat_fields_or_null } from "./process_stat_fields_or_null.mjs";
import { machine_clock_ticks_a_second } from "./machine_clock_ticks_a_second.mjs";
import { machine_uptime_seconds } from "./machine_uptime_seconds.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { list_get } from "./list_get.mjs";
import { null_is } from "./null_is.mjs";
import { divide } from "./divide.mjs";
import { subtract } from "./subtract.mjs";
export function process_alive_seconds_or_null(pid) {
  "How long a running process has been alive, in seconds, or nothing when there is no such process or it is not ours to look at.";
  "Alive is not the same as working, and keeping the two apart is the whole point of asking both. A prompt waiting for somebody to type has been alive for hours and has worked for none of them.";
  let fields = process_stat_fields_or_null(pid);
  if (null_is(fields)) {
    return null;
  }
  ("The twentieth of these is when it started, counted in ticks from the moment the machine came up rather than as a time of day - so how long the machine has been up is the other half of the answer.");
  let started_text = list_get(fields, 19);
  let started_ticks = number_from_text(started_text);
  let a_second = machine_clock_ticks_a_second();
  let started = divide(started_ticks, a_second);
  let uptime = machine_uptime_seconds();
  let seconds = subtract(uptime, started);
  return seconds;
}

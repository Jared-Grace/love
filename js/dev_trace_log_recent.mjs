import { arguments_assert } from "./arguments_assert.mjs";
import { dev_trace_log_path } from "./dev_trace_log_path.mjs";
import { dev_log_recent } from "./dev_log_recent.mjs";
export async function dev_trace_log_recent(count) {
  arguments_assert(arguments, 1);
  ("The last few steps /dev/ pages traced on a device, newest last - what somebody who was not there reads to see what a phone did.");
  let f_path = dev_trace_log_path();
  let recent = await dev_log_recent(f_path, count);
  return recent;
}

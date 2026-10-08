import { arguments_assert } from "./arguments_assert.mjs";
import { json_from } from "./json_from.mjs";
import { dev_trace_log_path } from "./dev_trace_log_path.mjs";
import { dev_log_add } from "./dev_log_add.mjs";
export async function dev_trace_log_add(entries_json, where) {
  arguments_assert(arguments, 2);
  ("Writes down every step a /dev/ page traced on a device, one line each, sent here once the device had a network again.");
  ("Each step keeps the device's own time beside the time it arrived here, because the steps were taken long before they were sent - with the wifi off is the whole case - and only the device's clock says when.");
  ("where is the address of the page that sent them, which is not necessarily where the steps were taken; each step carries its own when it matters.");
  let entries = json_from(entries_json);
  let f_path = dev_trace_log_path();
  for (let entry of entries) {
    let line = {
      ...entry,
      sent_from: where,
    };
    await dev_log_add(f_path, line);
  }
  let r = {
    written: entries.length,
  };
  return r;
}

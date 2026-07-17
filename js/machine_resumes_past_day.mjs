import { arguments_assert } from "./arguments_assert.mjs";
import { command_line } from "./command_line.mjs";
import { property_get } from "./property_get.mjs";
import { text_split } from "./text_split.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { error } from "./error.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
export async function machine_resumes_past_day() {
  arguments_assert(arguments, 0);
  let kernel_probe = await command_line("journalctl -k -o cat -n 1");
  let kernel_line = property_get(kernel_probe, "stdout");
  if (text_empty_is(text_trim(kernel_line))) {
    error(
      "I could not read this machine's system journal, so I cannot tell when it last woke — reading kernel logs needs the systemd-journal group. Would you like to add yourself with `sudo usermod -aG systemd-journal j` and re-login, or run this under `sg systemd-journal -c '…'` for now?",
    );
  }
  let result = await command_line(
    'journalctl --since "1 day ago" -o short-iso',
  );
  let stdout = property_get(result, "stdout");
  let lines = text_split(stdout, "\n");
  function line_is_resume(line) {
    let is_resume = line.includes("System returned from sleep");
    return is_resume;
  }
  let resume_lines = list_filter(lines, line_is_resume);
  function line_timestamp(line) {
    let words = text_split(line, " ");
    let timestamp = property_get(words, "0");
    return timestamp;
  }
  let timestamps = list_map(resume_lines, line_timestamp);
  return timestamps;
}

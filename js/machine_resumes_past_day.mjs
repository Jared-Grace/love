import { arguments_assert } from "./arguments_assert.mjs";
import { command_line } from "./command_line.mjs";
import { property_get } from "./property_get.mjs";
import { text_split } from "./text_split.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
export async function machine_resumes_past_day() {
  arguments_assert(arguments, 0);
  let result = await command_line(
    'journalctl -k --since "1 day ago" -o short-iso',
  );
  let stdout = property_get(result, "stdout");
  let lines = text_split(stdout, "\n");
  function line_is_resume(line) {
    let is_suspend_resume = line.includes("PM: suspend exit");
    let is_hibernate_resume = line.includes("PM: hibernation exit");
    let is_resume = is_suspend_resume || is_hibernate_resume;
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

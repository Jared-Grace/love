import { arguments_assert } from "./arguments_assert.mjs";
import { command_line_stdout } from "./command_line_stdout.mjs";
import { property_get } from "./property_get.mjs";
import { text_split } from "./text_split.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { not } from "./not.mjs";
import { error } from "./error.mjs";
import { date_time_zone_from_iso } from "./date_time_zone_from_iso.mjs";
import { date_time_zone_format_to } from "./date_time_zone_format_to.mjs";
import { date_time_zone_format_day_first } from "./date_time_zone_format_day_first.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
export async function machine_resumes_past_day() {
  arguments_assert(arguments, 0);
  function command_plain(journalctl_command) {
    return journalctl_command;
  }
  function command_via_sg(journalctl_command) {
    let wrapped = 'sg systemd-journal -c "' + journalctl_command + '"';
    return wrapped;
  }
  async function journal_stdout(journalctl_arguments, wrap) {
    let journalctl_command = "journalctl " + journalctl_arguments;
    let command = wrap(journalctl_command);
    let stdout = await command_line_stdout(command);
    return stdout;
  }
  async function journal_reachable(wrap) {
    let probe = await journal_stdout("-k -o cat -n 1", wrap);
    let reachable = not(text_empty_is(text_trim(probe)));
    return reachable;
  }
  let wrap = command_plain;
  let reachable_plain = await journal_reachable(command_plain);
  if (not(reachable_plain)) {
    wrap = command_via_sg;
    let reachable_via_sg = await journal_reachable(command_via_sg);
    if (not(reachable_via_sg)) {
      error(
        "I could not read this machine's system journal, even after trying `sg systemd-journal`, so I cannot tell when it last woke. Would you like to confirm you are in the systemd-journal group with `sudo usermod -aG systemd-journal j` and then re-login?",
      );
    }
  }
  let stdout = await journal_stdout("--since=-1d -o short-iso --reverse", wrap);
  let lines = text_split(stdout, "\n");
  function line_is_resume(line) {
    let is_resume = line.includes("System returned from sleep");
    return is_resume;
  }
  let resume_lines = list_filter(lines, line_is_resume);
  function line_iso(line) {
    let words = text_split(line, " ");
    let iso = property_get(words, "0");
    return iso;
  }
  let isos = list_map(resume_lines, line_iso);
  function iso_human(iso) {
    let dt = date_time_zone_from_iso(iso);
    let format = date_time_zone_format_day_first();
    let human = date_time_zone_format_to(dt, format);
    return human;
  }
  let humans = list_map(isos, iso_human);
  return humans;
}

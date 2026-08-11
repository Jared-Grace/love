import { arguments_assert } from "./arguments_assert.mjs";
import { command_line_stdout } from "./command_line_stdout.mjs";
export async function machine_resumes_past_day_journal_stdout(
  journalctl_arguments,
  wrap_given,
) {
  arguments_assert(arguments, 2);
  let journalctl_command = "journalctl " + journalctl_arguments;
  let command = wrap_given(journalctl_command);
  let printed = await command_line_stdout(command);
  return printed;
}

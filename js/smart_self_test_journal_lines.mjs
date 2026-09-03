import { arguments_assert } from "./arguments_assert.mjs";
import { smart_self_test_units } from "./smart_self_test_units.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { command_line_code_ignore_stdout } from "./command_line_code_ignore_stdout.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export async function smart_self_test_journal_lines(since) {
  arguments_assert(arguments, 1);
  ("Every line written since the given moment by any of the units that record a drive being made to read itself, gathered into one list.");
  ("Asked of the units' logs rather than of the drives themselves, because reading a drive's own history of tests has to be done as the machine's owner, and a check that stops to ask for a password is a check that gets skipped.");
  ("The moment is quoted with double quotes and no other kind. What runs these lines starts the program directly rather than handing the line to a shell, and splits it up itself on a rule that understands double quotes only. A moment written in single quotes therefore arrives as three separate arguments, the command fails, and a runner told to pay no attention to the exit code hands back an empty answer - which reads exactly like a log with nothing in it, and so turns a broken question into a confident wrong answer.");
  let units = smart_self_test_units();
  let lines = [];
  for (let unit of units) {
    let command = text_combine_multiple([
      "journalctl -u ",
      unit,
      ' --since "',
      since,
      '" --no-pager',
    ]);
    let text = await command_line_code_ignore_stdout(command);
    let split = text_split_newline(text);
    list_add_multiple(lines, split);
  }
  return lines;
}

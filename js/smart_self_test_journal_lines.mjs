import { arguments_assert } from "./arguments_assert.mjs";
import { smart_self_test_units } from "./smart_self_test_units.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { command_line_code_ignore_stdout } from "./command_line_code_ignore_stdout.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { text_frozen } from "./text_frozen.mjs";
import { list_filter_text_includes_not } from "./list_filter_text_includes_not.mjs";
export async function smart_self_test_journal_lines(since) {
  arguments_assert(arguments, 1);
  ("Every line written since the given moment by any of the units that record a drive being made to read itself, gathered into one list, with the system manager's own lines about those units left out.");
  ("Asked of the units' logs rather than of the drives themselves, because reading a drive's own history of tests has to be done as the machine's owner, and a check that stops to ask for a password is a check that gets skipped.");
  ("The system manager's narration is dropped, and that is the whole reason this does anything more than read a log. When it starts a unit, finishes one, or fails to start one, it writes a line quoting that unit's description - so a unit described as a short self-test of a named drive puts the drive's name and the words self test into the log every single time it runs, whether the test happened or not. A reader keeping those lines counts a failed run as evidence of a good one. It very nearly did: the first attempt to install such a unit here was broken, the tool exited complaining it had been given no drive to look at, and the failure line the manager wrote about it said short self-test of that drive just as the success line does.");
  ("So only what a process printed itself is kept. A tool saying what it found is a report; the manager saying what it was about to run is a label, and a label is available before there is anything to report. Told apart by who wrote the line, which the log records at the front of each one.");
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
  let manager = text_frozen("systemd[");
  let printed = list_filter_text_includes_not(lines, manager);
  return printed;
}

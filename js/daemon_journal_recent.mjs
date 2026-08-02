import { command_line_stdout } from "./command_line_stdout.mjs";
import { daemon_journal_recent_count } from "./daemon_journal_recent_count.mjs";
import { daemon_unit_name } from "./daemon_unit_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function daemon_journal_recent(f_name) {
  "the last few lines one daemon has written, asked of the journal by unit name rather than by hand";
  "status answers whether a daemon is up, and a daemon that is up and doing nothing looks exactly like one that is up and working. What it has said lately is the only thing that tells those apart.";
  "no-pager because a pager waiting for a keypress on a screen nobody is watching is a hang rather than an answer";
  let unit = daemon_unit_name(f_name);
  let count = daemon_journal_recent_count();
  let command = text_combine_multiple([
    "journalctl --user -u ",
    unit,
    " -n ",
    count,
    " --no-pager",
  ]);
  let text = await command_line_stdout(command);
  return text;
}

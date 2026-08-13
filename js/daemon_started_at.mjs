import { command_line_stdout } from "./command_line_stdout.mjs";
import { daemon_unit_name } from "./daemon_unit_name.mjs";
import { integer_to_try } from "./integer_to_try.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_skip } from "./text_skip.mjs";
import { text_trim } from "./text_trim.mjs";
export async function daemon_started_at(f_name) {
  "The second this daemon last started running, counted the way a commit counts its own.";
  "Asked for as a plain count of seconds rather than as a written-out date, because the only thing ever done with the answer is hold it against when a commit was made. A written-out date carries a weekday and the name of a zone, and this machine writes its commits in one zone while speaking its own time in another - so comparing the two as words was wrong twice over. Worse, handing git a date it cannot read makes it answer that it found nothing rather than that it could not tell: the reading fails towards all clear, which is the one direction a check must never fail in. A count of seconds cannot be misread that way.";
  "Nothing at all when the daemon is not running, because systemd has no such second to give. Whether a daemon is up is a question already answered elsewhere, and answering it again here would only let this speak twice about one fault.";
  let unit = daemon_unit_name(f_name);
  let command = text_combine_multiple([
    "systemctl --user show --timestamp=unix --value -p ActiveEnterTimestamp ",
    unit,
  ]);
  let text = await command_line_stdout(command);
  let trimmed = text_trim(text);
  ("systemd writes the count behind a mark that says a count is what it is, so the mark is stepped over before reading the number");
  let seconds_digits = text_skip(trimmed, 1);
  let at = integer_to_try(seconds_digits);
  return at;
}

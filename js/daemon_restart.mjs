import { daemon_unit_name } from "./daemon_unit_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { command_line } from "./command_line.mjs";
import { daemon_status } from "./daemon_status.mjs";
export async function daemon_restart(f_name) {
  "Stops a daemon and starts it again, so that it picks up the code as it now stands.";
  "A daemon reads the repo once, when it starts, and then runs for weeks. Editing what it does therefore changes nothing until somebody says this - and the file being newer than the process is invisible from outside, which is what makes an unrestarted daemon so easy to believe fixed.";
  let unit = daemon_unit_name(f_name);
  let combined = text_combine_multiple(["systemctl --user restart ", unit]);
  await command_line(combined);
  let status = await daemon_status(f_name);
  return status;
}

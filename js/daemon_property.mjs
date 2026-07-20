import { command_line_stdout } from "./command_line_stdout.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { daemon_unit_name } from "./daemon_unit_name.mjs";
export async function daemon_property(fn_name, property) {
  ("one fact about one daemon, asked of systemd itself so nothing here can drift from what is actually running");
  ("show, not is-active: show answers for a daemon that was never installed and still exits zero, where is-active exits nonzero and would throw");
  let unit = daemon_unit_name(fn_name);
  let command = text_combine_multiple([
    "systemctl --user show ",
    unit,
    " -p ",
    property,
    " --value",
  ]);
  let text = await command_line_stdout(command);
  let v = text_trim(text);
  return v;
}

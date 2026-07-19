import { command_line } from "./command_line.mjs";
import { property_get } from "./property_get.mjs";
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
  let result = await command_line(command);
  let text = property_get(result, "stdout");
  let v = text_trim(text);
  return v;
}

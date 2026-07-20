import { command_line_stdout } from "./command_line_stdout.mjs";
import { daemon_unit_name } from "./daemon_unit_name.mjs";
import { list_map } from "./list_map.mjs";
import { properties_from_equal_lines } from "./properties_from_equal_lines.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function daemon_properties(fn_name, property_names) {
  ("several facts about one daemon in a single question, asked of systemd itself so nothing here can drift from what is actually running");
  ("show, not is-active: show answers for a daemon that was never installed and still exits zero, where is-active exits nonzero and would throw");
  ("systemd answers in its own order, not the order asked, so the reply is read back by name rather than by position");
  let unit = daemon_unit_name(fn_name);
  function flag(property_name) {
    let f = text_combine(" -p ", property_name);
    return f;
  }
  let command = text_combine_multiple([
    "systemctl --user show ",
    unit,
    text_combine_multiple(list_map(property_names, flag)),
  ]);
  let text = await command_line_stdout(command);
  let v = properties_from_equal_lines(text);
  return v;
}

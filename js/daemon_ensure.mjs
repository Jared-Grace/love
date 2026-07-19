import { log } from "./log.mjs";
import { equal_not } from "./equal_not.mjs";
import { command_line } from "./command_line.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
import { daemon_unit_name } from "./daemon_unit_name.mjs";
import { daemon_unit_path } from "./daemon_unit_path.mjs";
import { daemon_unit_text } from "./daemon_unit_text.mjs";
import { daemon_unit_text_current } from "./daemon_unit_text_current.mjs";
export async function daemon_ensure(fn_name) {
  ("create the daemon and start it, in whatever state the machine is already in: every step below is a no-op when there is nothing to do, so this is safe to run any time");
  let text = daemon_unit_text(fn_name);
  let current = await daemon_unit_text_current(fn_name);
  let changed = equal_not(current, text);
  let unit = daemon_unit_name(fn_name);
  if (changed) {
    await file_overwrite_uncached(daemon_unit_path(fn_name), text);
    await command_line("systemctl --user daemon-reload");
  }
  ("enable --now installs and starts in one step, and does nothing at all when the daemon is already running");
  await command_line(
    text_combine_multiple(["systemctl --user enable --now ", unit]),
  );
  if (changed) {
    ("an already-running daemon keeps its old command until it is told to start over");
    await command_line(
      text_combine_multiple(["systemctl --user restart ", unit]),
    );
  }
  log(daemon_ensure.name, {
    unit,
    changed,
  });
}

import { fn_name } from "./fn_name.mjs";
import { daemon_unit_name } from "./daemon_unit_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { command_line } from "./command_line.mjs";
import { daemon_status } from "./daemon_status.mjs";
export async function daemon_stop(f_name) {
  "Stops a daemon and leaves it stopped, then says how it stands afterwards.";
  ("The counterpart of ",
    fn_name("daemon_restart"),
    ", for the times when what is wanted is not newer code but no writing at all. A history rewrite is the case it was written for: the repo is cloned, rewritten and force-pushed, and a daemon that commits or pushes in the middle of that lands work on a history that is about to stop existing.");
  ("It does not remember that it stopped anything. Bringing them back is ",
    fn_name("daemons_ensure"),
    ", which is the one that already knows what each daemon should be.");
  let unit = daemon_unit_name(f_name);
  let combined = text_combine_multiple(["systemctl --user stop ", unit]);
  await command_line(combined);
  let status = await daemon_status(f_name);
  return status;
}

import { list_join_newline } from "./list_join_newline.mjs";
import { list_add } from "./list_add.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { folder_repo_root_find } from "./folder_repo_root_find.mjs";
import { daemon_runtime_max } from "./daemon_runtime_max.mjs";
export function daemon_unit_text(fn_name) {
  ("the whole unit is derived from the function name, so there is no second place to keep in sync when a daemon is added or renamed");
  let repo_root = folder_repo_root_find(process.cwd());
  ("run the node that is running right now, so a version manager's node is honoured instead of guessing a path");
  let node_path = process.execPath;
  let start = text_combine_multiple([node_path, " scripts/r.mjs ", fn_name]);
  let description = text_combine_multiple(["love ", fn_name]);
  ("a daemon dying is the failure that bit us, so always come back — after a pause long enough that a broken one does not spin");
  let lines = [
    "[Unit]",
    text_combine_multiple(["Description=", description]),
    "",
    "[Service]",
    text_combine_multiple(["WorkingDirectory=", repo_root]),
    text_combine_multiple(["ExecStart=", start]),
    "Restart=always",
    "RestartSec=2",
  ];
  let runtime_max = daemon_runtime_max(fn_name);
  let recycle = null_not_is(runtime_max);
  if (recycle) {
    ("a daemon that slowly degrades without dying (webpack_watch bloated and stopped rebuilding) is recycled on a schedule: systemd stops it after this long, and Restart=always above brings it back fresh");
    list_add(lines, text_combine_multiple(["RuntimeMaxSec=", runtime_max]));
  }
  list_add_multiple(lines, ["", "[Install]", "WantedBy=default.target", ""]);
  let v = list_join_newline(lines);
  return v;
}

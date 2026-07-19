import { list_join_newline } from "./list_join_newline.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { folder_repo_root_find } from "./folder_repo_root_find.mjs";
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
    "",
    "[Install]",
    "WantedBy=default.target",
    "",
  ];
  let v = list_join_newline(lines);
  return v;
}

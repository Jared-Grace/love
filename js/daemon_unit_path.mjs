import os from "os";
import { path_join } from "./path_join.mjs";
import { daemon_unit_name } from "./daemon_unit_name.mjs";
export function daemon_unit_path(fn_name) {
  ("a user unit, not a system one: these run as the human who owns the repo, with no root anywhere");
  let folder = path_join([os.homedir(), ".config", "systemd", "user"]);
  let v = path_join([folder, daemon_unit_name(fn_name)]);
  return v;
}

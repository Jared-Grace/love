import { path_join } from "./path_join.mjs";
import { daemon_unit_name } from "./daemon_unit_name.mjs";
import { daemon_units_folder } from "./daemon_units_folder.mjs";
export function daemon_unit_path(f_name) {
  "a user unit, not a system one: these run as the human who owns the repo, with no root anywhere";
  let folder = daemon_units_folder();
  let v2 = daemon_unit_name(f_name);
  let v = path_join([folder, v2]);
  return v;
}

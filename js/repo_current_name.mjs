import { path_base } from "./path_base.mjs";
export function repo_current_name() {
  let cwd = process.cwd();
  let name = path_base(cwd);
  return name;
}

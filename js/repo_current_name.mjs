import { path_base } from "./path_base.mjs";
export function repo_current_name() {
  "The name of the repository a command is running in, read from the folder the process was started in.";
  let cwd = process.cwd();
  let name = path_base(cwd);
  return name;
}

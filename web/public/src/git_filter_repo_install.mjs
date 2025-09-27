import { command_line } from "./command_line.mjs";
import { marker } from "./marker.mjs";
export async function git_filter_repo_install(command) {
  marker("1");
  let v = await command_line("python -m pip install git-filter-repo");
  return v;
}

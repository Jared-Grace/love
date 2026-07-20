import { command_line_stdout } from "./command_line_stdout.mjs";
export async function git_filter_repo_install() {
  let v = await command_line_stdout("python -m pip install git-filter-repo");
  return v;
}

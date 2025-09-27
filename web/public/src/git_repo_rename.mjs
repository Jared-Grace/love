import { command_line } from "./command_line.mjs";
import { marker } from "./marker.mjs";
export async function git_repo_rename(from, to) {
  marker("1");
  let stdout = await command_line(
    "gh repo rename <owner>/" + from + " --name <new-repo-name>" + to,
  );
  return stdout;
}

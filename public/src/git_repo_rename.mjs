import { command_line } from "../../../love/public/src/command_line.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function git_repo_rename(owner, from, to) {
  marker("1");
  let stdout = await command_line(
    "gh repo rename " + to + " --repo " + owner + "/" + from,
  );
  return stdout;
}

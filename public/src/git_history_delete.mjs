import { command_line } from "./command_line.mjs";
import { marker } from "./marker.mjs";
export async function git_history_delete(user, repo) {
  marker("1");
  let stdout = await command_line(
    "git clone --mirror https://github.com/" +
      user +
      "/" +
      repo +
      ".git " +
      repo +
      "-clean-" +
      ".git",
  );
}

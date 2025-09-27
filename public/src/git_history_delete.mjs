import { uuid } from "./uuid.mjs";
import { command_line } from "./command_line.mjs";
import { marker } from "./marker.mjs";
export async function git_history_delete(user, repo) {
  marker("1");
  ("make sure all changes are in repo first like pushing");
  let stdout = await command_line(
    "git clone --mirror https://github.com/" +
      user +
      "/" +
      repo +
      ".git " +
      repo +
      "-clean-" +
      (await uuid()) +
      ".git",
  );
  ("cd into directory");
}

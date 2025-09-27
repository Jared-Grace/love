import { command_line_git } from "./command_line_git.mjs";
import { uuid } from "./uuid.mjs";
import { marker } from "./marker.mjs";
export async function git_history_delete(user, repo) {
  marker("1");
  ("make sure all changes are in repo first like pushing");
  let stdout = await command_line_git(
    "clone --mirror https://github.com/" +
      user +
      "/" +
      repo +
      ".git" +
      " " +
      repo +
      "-clean-" +
      (await uuid()) +
      ".git",
  );
  ("cd into directory");
  let stdout2 = await command_line_git(
    "remote add origin https://github.com/Jared-Grace/love.git",
  );
}

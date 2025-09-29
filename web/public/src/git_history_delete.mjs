import { folder_previous } from "../../../love/public/src/folder_previous.mjs";
import { git_repo_url } from "../../../love/public/src/git_repo_url.mjs";
import { folder_delete } from "../../../love/public/src/folder_delete.mjs";
import { todo } from "../../../love/public/src/todo.mjs";
import { command_line_git } from "../../../love/public/src/command_line_git.mjs";
import { uuid } from "../../../love/public/src/uuid.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function git_history_delete(user, repo, f_path) {
  marker("1");
  todo(
    "make sure all changes are in repo first like pushing; may need to coordinate with other users",
  );
  todo("make sure this is run from the correct directory");
  const url = git_repo_url(user, repo);
  const repo_folder = repo + "-clean-" + (await uuid()) + ".git";
  let stdout = await command_line_git(
    "clone --mirror " + url + " " + repo_folder,
  );
  process.chdir(repo_folder);
  let stdout2 = await command_line_git("remote add origin " + url);
  await command_line_git("filter-repo --path " + f_path + " --invert-paths");
  await command_line_git("push --force --all origin");
  await command_line_git("push --force --tags origin");
  let previous = folder_previous();
  process.chdir(previous);
  await folder_delete(repo_folder);
}

import { git_repo_url } from "./git_repo_url.mjs";
import { folder_delete } from "./folder_delete.mjs";
import { todo } from "./todo.mjs";
import { command_line_git } from "./command_line_git.mjs";
import { uuid } from "./uuid.mjs";
import { marker } from "./marker.mjs";
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
  process.chdir("..");
  await folder_delete(repo_folder);
}

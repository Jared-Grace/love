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
  const git_repo_url = "https://github.com/" + user + "/" + repo + ".git";
  const repo_folder = repo + "-clean-" + (await uuid()) + ".git";
  let stdout = await command_line_git(
    "clone --mirror " + git_repo_url + " " + repo_folder,
  );
  process.chdir(repo_folder);
  let stdout2 = await command_line_git("remote add origin " + git_repo_url);
  await command_line_git("filter-repo --path " + f_path + " --invert-paths");
  await command_line_git("push --force --all origin");
  await command_line_git("push --force --tags origin");
  await folder_delete(folder_path);
}

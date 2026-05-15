import { log } from "../../../love/public/src/log.mjs";
import { path_resolve } from "../../../love/public/src/path_resolve.mjs";
import { git_push_folder_now } from "../../../love/public/src/git_push_folder_now.mjs";
import { git_history_delete_repo_folder_name } from "../../../love/public/src/git_history_delete_repo_folder_name.mjs";
import { file_name_json_folder_gitignore } from "../../../love/public/src/file_name_json_folder_gitignore.mjs";
import { repo_path } from "../../../love/public/src/repo_path.mjs";
import { git_repo_url } from "../../../love/public/src/git_repo_url.mjs";
import { folder_delete } from "../../../love/public/src/folder_delete.mjs";
import { command_line_git } from "../../../love/public/src/command_line_git.mjs";
export async function git_history_delete(user, repo, f_path, repo_path) {
  await git_push_folder_now(repo_path);
  ("make sure all changes are in repo first like pushing; may need to coordinate with other users");
  ("make sure this is ran from the correct directory");
  const url = git_repo_url(user, repo);
  const repo_folder_name = await git_history_delete_repo_folder_name(repo);
  let repo_folder = file_name_json_folder_gitignore(repo_folder_name);
  let repo_folder_resolved = await path_resolve(repo_folder);
  let stdout = await command_line_git(
    "clone --mirror " + url + " " + repo_folder,
  );
  log(git_history_delete.name, {
    stdout,
  });
  let v = await command_line_git("remote -v");
  log(git_history_delete.name, {
    v,
  });
  process.chdir(repo_folder);
  await command_line_git("remote remove origin || true");
  await command_line_git("remote add origin " + url);
  await command_line_git(
    "filter-repo --path " + f_path + " --invert-paths --force",
  );
  await command_line_git("push --force --all origin");
  await command_line_git("push --force --tags origin");
  await folder_delete(repo_folder_resolved);
}

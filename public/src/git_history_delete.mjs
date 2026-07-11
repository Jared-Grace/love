import { git_purge_everyone } from "../../../love/public/src/git_purge_everyone.mjs";
import { command_line_git_folder } from "../../../love/public/src/command_line_git_folder.mjs";
import { folder_gitignore_join } from "../../../love/public/src/folder_gitignore_join.mjs";
import { catch_ignore_async } from "../../../love/public/src/catch_ignore_async.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { path_resolve } from "../../../love/public/src/path_resolve.mjs";
import { git_push_folder_now } from "../../../love/public/src/git_push_folder_now.mjs";
import { git_history_delete_repo_folder_name } from "../../../love/public/src/git_history_delete_repo_folder_name.mjs";
import { repo_path } from "../../../love/public/src/repo_path.mjs";
import { git_repo_url } from "../../../love/public/src/git_repo_url.mjs";
import { folder_delete } from "../../../love/public/src/folder_delete.mjs";
import { command_line_git_current } from "../../../love/public/src/command_line_git_current.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export async function git_history_delete(user, repo, f_path, repo_path) {
  await git_push_folder_now(repo_path);
  ("make sure all changes are in repo first like pushing; may need to coordinate with other users");
  ("make sure this is ran from the correct directory");
  let url = git_repo_url(user, repo);
  let repo_folder_name = await git_history_delete_repo_folder_name(repo);
  let repo_folder = folder_gitignore_join(repo_folder_name);
  let repo_folder_resolved = await path_resolve(repo_folder);
  let stdout = await command_line_git_current(
    text_combine_multiple(["clone --mirror ", url, " ", repo_folder]),
  );
  log(git_history_delete.name, {
    stdout,
  });
  let v = await command_line_git_folder(repo_folder, "remote -v");
  log(git_history_delete.name, {
    v,
  });
  async function lambda() {
    await command_line_git_folder(repo_folder, "remote remove origin");
  }
  let r = await catch_ignore_async(lambda);
  await command_line_git_folder(
    repo_folder,
    text_combine_multiple([
      "filter-repo --path ",
      f_path,
      " --invert-paths --force",
    ]),
  );
  await command_line_git_folder(
    repo_folder,
    text_combine("remote add origin ", url),
  );
  await command_line_git_folder(repo_folder, "push --force --all origin");
  await command_line_git_folder(repo_folder, "push --force --tags origin");
  await folder_delete(repo_folder_resolved);
  ("everyone must run this:");
  await git_purge_everyone();
}

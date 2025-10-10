import { assert_not } from "../../../love/public/src/assert_not.mjs";
import { git_push_schedule_check } from "../../../love/public/src/git_push_schedule_check.mjs";
import { git_push_schedule_task_name } from "../../../love/public/src/git_push_schedule_task_name.mjs";
import { git_push_command } from "../../../love/public/src/git_push_command.mjs";
import { command_line_git_prefix } from "../../../love/public/src/command_line_git_prefix.mjs";
import { path_resolve } from "../../../love/public/src/path_resolve.mjs";
import { folder_current } from "../../../love/public/src/folder_current.mjs";
export async function git_push_schedule_command() {
  let exists = await git_push_schedule_check();
  assert_not(exists);
  let paths = folder_current();
  let result = await path_resolve(paths);
  let command =
    '/create /sc daily /st 08:00 /tn "' +
    git_push_schedule_task_name() +
    '" /tr "cmd /c cd /d ' +
    result +
    " && " +
    command_line_git_prefix() +
    git_push_command() +
    '"';
  return command;
}

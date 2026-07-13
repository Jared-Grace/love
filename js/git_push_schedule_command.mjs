import { not_assert_json } from "./not_assert_json.mjs";
import { git_push_schedule_check } from "./git_push_schedule_check.mjs";
import { git_push_schedule_task_name } from "./git_push_schedule_task_name.mjs";
import { git_push_text } from "./git_push_text.mjs";
import { command_line_git_prefix } from "./command_line_git_prefix.mjs";
import { path_resolve } from "./path_resolve.mjs";
import { folder_current } from "./folder_current.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function git_push_schedule_command() {
  let exists = await git_push_schedule_check();
  not_assert_json(exists, {
    hint: "the git push schedule shouldn't already exist before creating it — is it already scheduled?",
  });
  let paths = folder_current();
  let result = await path_resolve(paths);
  let command = text_combine_multiple([
    '/create /sc daily /st 08:00 /tn "',
    git_push_schedule_task_name(),
    '" /tr "cmd /c cd /d ',
    result,
    " && ",
    command_line_git_prefix(),
    git_push_text(),
    '"',
  ]);
  return command;
}

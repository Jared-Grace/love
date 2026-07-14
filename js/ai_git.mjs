import { git_ac_call_repos } from "../../love/js/git_ac_call_repos.mjs";
import { git_acp_call_folder_try } from "./git_acp_call_folder_try.mjs";
import { path_join } from "./path_join.mjs";
import { lock_wait } from "../../love/js/lock_wait.mjs";
import os from "os";
Error.stackTraceLimit = Infinity;
export async function ai_git() {
  let f_name = "ai";
  let args = [];
  async function lambda() {
    await git_ac_call_repos(f_name, args);
    let memory_backup_folder = path_join([os.homedir(), "backup", "love_claude_memory"]);
    await git_acp_call_folder_try(memory_backup_folder, f_name, args);
  }
  await lock_wait(ai_git.name, lambda, ai_git.name);
}

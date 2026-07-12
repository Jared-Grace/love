import { promise_later } from "./promise_later.mjs";
import { git_acp_call_repos } from "./git_acp_call_repos.mjs";
import { lock_wait } from "./lock_wait.mjs";
import { function_run_prompt } from "./function_run_prompt.mjs";
export function git_acp_call_repos_unawait(f_name, args) {
  async function wrapped() {
    await git_acp_call_repos(f_name, args);
  }
  async function lambda() {
    await lock_wait(
      function_run_prompt.name,
      wrapped,
      git_acp_call_repos_unawait.name,
    );
  }
  promise_later(lambda);
}

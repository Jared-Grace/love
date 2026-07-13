import { lock_wait_prompt } from "../../love/js/lock_wait_prompt.mjs";
import { promise_later } from "../../love/js/promise_later.mjs";
import { git_acp_call_repos } from "../../love/js/git_acp_call_repos.mjs";
export function git_acp_call_repos_unawait(f_name, args) {
  async function wrapped() {
    await git_acp_call_repos(f_name, args);
  }
  async function lambda() {
    await lock_wait_prompt(wrapped, git_acp_call_repos_unawait.name);
  }
  promise_later(lambda);
}

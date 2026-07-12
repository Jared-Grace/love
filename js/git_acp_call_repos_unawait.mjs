import { promise_later } from "./promise_later.mjs";
import { git_acp_call_repos } from "./git_acp_call_repos.mjs";
export function git_acp_call_repos_unawait(f_name, args) {
  async function lambda() {
    await git_acp_call_repos(f_name, args);
  }
  promise_later(lambda);
}

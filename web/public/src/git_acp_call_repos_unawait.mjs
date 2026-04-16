import { promise_later } from "../../../love/public/src/promise_later.mjs";
import { git_acp_call_repos } from "../../../love/public/src/git_acp_call_repos.mjs";
export function git_acp_call_repos_unawait(f_name, args) {
  async function lambda2() {
    await git_acp_call_repos(f_name, args);
  }
  promise_later(lambda2);
}

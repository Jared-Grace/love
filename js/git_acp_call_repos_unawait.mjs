import { promise_later } from "./promise_later.mjs";
import { git_acp_call_repos } from "./git_acp_call_repos.mjs";
import { lock_generic } from "./lock_generic.mjs";
export function git_acp_call_repos_unawait(f_name, args) {
  async function wrapped() {
    await git_acp_call_repos(f_name, args);
  }
  async function lambda() {
    await lock_generic(
      git_acp_call_repos.name,
      false,
      wrapped,
      git_acp_call_repos_unawait.name,
    );
  }
  promise_later(lambda);
}

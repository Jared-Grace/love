import { lock_wait_prompt } from "./lock_wait_prompt.mjs";
import { promise_later } from "./promise_later.mjs";
import { git_ac_call_repos } from "./git_ac_call_repos.mjs";
export function git_ac_call_repos_unawait(f_name, args) {
  "Commits every repo after a line typed at the prompt, without waiting for it and without sending anything anywhere.";
  "The twin of this that also pushed was what made the prompt feel slow. Sending to the far end is the only part of the whole job that leaves the machine, and it was measured at between three and a half and twenty-two seconds - all of it inside the prompt's own lock, so the next line typed waited behind a network round trip that had nothing to do with it.";
  "Nothing is lost by leaving it out. A commit is local and complete the moment it is made; sending it is a separate errand, and there is a daemon whose whole job is that errand, running it over every repo about once a minute. What the push here bought was that the commit left the machine a little sooner. What it cost was the wait, and the wait was paid by a person.";
  "If that daemon is ever stopped, commits pile up here and go out when it starts again - so the failure is a delay, never a loss. The gate says so out loud rather than leaving it to be noticed: a daemon that is not running fails it.";
  async function wrapped() {
    await git_ac_call_repos(f_name, args);
  }
  async function lambda() {
    await lock_wait_prompt(wrapped, git_ac_call_repos_unawait.name);
  }
  promise_later(lambda);
}

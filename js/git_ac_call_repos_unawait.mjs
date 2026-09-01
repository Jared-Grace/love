import { function_name_unalias } from "./function_name_unalias.mjs";
import { property_get } from "./property_get.mjs";
import { git_ac_call_repos } from "./git_ac_call_repos.mjs";
import { lock_wait_prompt } from "./lock_wait_prompt.mjs";
import { promise_later } from "./promise_later.mjs";
export function git_ac_call_repos_unawait(f_name, args) {
  "Commits every repo after a line typed at the prompt, without waiting for it and without sending anything anywhere.";
  "The twin of this that also pushed was what made the prompt feel slow. Sending to the far end is the only part of the whole job that leaves the machine, and it was measured at between three and a half and twenty-two seconds - all of it inside the prompt's own lock, so the next line typed waited behind a network round trip that had nothing to do with it.";
  "Nothing is lost by leaving it out. A commit is local and complete the moment it is made; sending it is a separate errand, and there is a daemon whose whole job is that errand, running it over every repo about once a minute. What the push here bought was that the commit left the machine a little sooner. What it cost was the wait, and the wait was paid by a person.";
  "If that daemon is ever stopped, commits pile up here and go out when it starts again - so the failure is a delay, never a loss. The gate says so out loud rather than leaving it to be noticed: a daemon that is not running fails it.";
  "THE MESSAGE IS WRITTEN WITH THE NAME OF THE COMMAND AND NEVER WITH THE SHORT WORD THAT WAS TYPED TO REACH IT. This is the one path where a message is made out of something a person typed, and a person types the short word, because the short word is what the short word is for. A short word is not an identity: pointing it at something else is one command, and every commit already carrying it then reads as a record of a change made by whatever it points at now - a history saying a thing nobody did. The full name cannot move like that, because renaming one carries its short words along with it.";
  "IT IS RESOLVED HERE RATHER THAN AT THE THREE PLACES THAT CALL THIS, because this is the narrowest place all three pass through and the only one whose whole job is the message. The line that runs the command resolves the same word a moment earlier and keeps the answer to itself, so the work is done twice; that costs one read of a small file, against a run of git over several folders that this is already waiting on, and it is paid on a promise nobody is waiting for.";
  async function wrapped() {
    let v = await function_name_unalias(f_name);
    let unaliased = property_get(v, "unaliased");
    await git_ac_call_repos(unaliased, args);
  }
  async function lambda() {
    await lock_wait_prompt(wrapped, git_ac_call_repos_unawait.name);
  }
  promise_later(lambda);
}

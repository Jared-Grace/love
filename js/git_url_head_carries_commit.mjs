import { arguments_assert } from "./arguments_assert.mjs";
import { git_history_url_head_matches } from "./git_history_url_head_matches.mjs";
import { git_folder_commit_known_is } from "./git_folder_commit_known_is.mjs";
import { not } from "./not.mjs";
import { git_folder_commit_ancestor_is } from "./git_folder_commit_ancestor_is.mjs";
export async function git_url_head_carries_commit(folder, url, commit) {
  "$plain folder";
  "$plain url";
  "$plain commit";
  "What an address is standing on, and whether a given commit is somewhere underneath it - which is the question worth asking after a history was replaced, rather than whether the address is standing on that exact commit.";
  "★ ASKING FOR AN EXACT MATCH MAKES A CHECK THAT CANNOT PASS WHEN EVERYONE WRITES TO ONE BRANCH. Sending a replaced history is slow enough that this folder has moved on by the time the address can be asked - measured on a send of about four hundred megabytes, the folder went two commits further while it was going, and the address that had just taken the send was reported as not having taken it. Underneath-or-equal is the predicate that means what the caller wanted: took the rewrite. Ahead is fine, because ordinary sending catches an address up by itself; only not-underneath is a real refusal.";
  "An address holding a name this repository does not know is reported apart from one holding a name it knows and is not underneath, because those mean different things about how far to trust the verdict, and both come out as a plain no when a failed question is read as an answer.";
  "Reads both this folder and the address, and writes to neither.";
  arguments_assert(arguments, 3);
  let answer = await git_history_url_head_matches(url, commit);
  let found = answer.found;
  let known = await git_folder_commit_known_is(folder, found);
  async function git_url_head_carries_commit_underneath() {
    if (not(known)) {
      return false;
    }
    let before = await git_folder_commit_ancestor_is(folder, commit, found);
    return before;
  }
  let carries = await git_url_head_carries_commit_underneath();
  let r = {
    url,
    found,
    matches: answer.matches,
    known,
    carries,
  };
  return r;
}

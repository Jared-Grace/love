import { git_folder_run } from "./git_folder_run.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
export async function git_fetch_folder_try(folder) {
  "Brings this folder's record of where its remote stands back up to date, answering nothing rather than throwing when the remote cannot be reached.";
  "It is asked straight after a push because of how that push is spelled. Sending the work names the address itself rather than the remote's name, which is what lets two mirrors be pushed at one at a time so a single unreachable one cannot speak for the other; but git only writes down where a remote stands when the push named that remote, so a push spelled as an address leaves that record untouched. The work reaches the internet and the folder goes on holding whatever it last heard.";
  "What that costs is a reader. Anything reading the record rather than the internet - an editor's own view of the repository is the one that found this - reports every commit made since the last time somebody asked as unsent, which after a fortnight was over five thousand of them. None of them were unsent. A number that is always wrong by thousands is a number nobody can read the one time it is right.";
  "Asking is the honest repair rather than writing the record from what we believe we just pushed. A push that succeeded says our work arrived; it says nothing about whether the remote also moved underneath us, and that second thing is the one case here that needs a person.";
  async function lambda() {
    let command_words = ["fetch", "origin"];
    let printed = await git_folder_run(folder, command_words);
    return printed;
  }
  let answered = await catch_null_async(lambda);
  return answered;
}

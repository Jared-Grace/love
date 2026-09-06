import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { git_here_run_text } from "./git_here_run_text.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
import { number_from_text } from "./number_from_text.mjs";
export async function git_commit_behind_count(commit, newer) {
  "$plain commit";
  "$plain newer";
  "How many commits stand between the one named and the newer one named, as a plain number. Read-only.";
  "Distance in commits is what ages a record here, not distance in time. Everybody commits to the one branch all day, so a judgement written this morning can be a thousand commits behind by the evening while reading as only hours old - and a thousand commits is the honest measure of how much the answer is now about.";
  "A commit the folder no longer holds comes back as nothing rather than as a throw. A record outlives the history it names, and a reader that fell over on the first name git had forgotten would lose every good answer beside it to one bad one.";
  async function counted() {
    let span = text_combine_multiple([commit, "..", newer]);
    let trimmed = await git_here_run_text(["rev-list", "--count", span]);
    return trimmed;
  }
  let text = await catch_null_async(counted);
  let missing = null_is(text);
  if (missing) {
    return null;
  }
  let count = number_from_text(text);
  return count;
}

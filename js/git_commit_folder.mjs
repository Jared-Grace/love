import { catch_ignore_async } from "./catch_ignore_async.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
export async function git_commit_folder(folder, message) {
  "The message travels as one word of the list, so nothing it contains can end up as a further argument to git - which is why it does not have to be stripped of anything first.";
  async function lambda() {
    await git_folder_run(folder, ["commit", "-m", message]);
  }
  await catch_ignore_async(lambda);
}

import { catch_null_async } from "./catch_null_async.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { log } from "./log.mjs";
import { null_is } from "./null_is.mjs";
export async function git_push_folder_url_try(folder, url) {
  "One push to one address, answering nothing rather than throwing when that address cannot be reached.";
  "A push naming several addresses at once fails as a whole when any single one of them fails, which lets an address nobody can reach speak for the ones that received the work perfectly well. Asking one at a time is what separates them, and answering nothing rather than raising is what lets the caller carry on to the next.";
  "The failure is said out loud even though it is not raised. An address quietly receiving nothing looks exactly like an address already up to date, and that is the one thing this could otherwise hide.";
  async function lambda() {
    let command_words = ["push", url];
    let printed = await git_folder_run(folder, command_words);
    return printed;
  }
  let answered = await catch_null_async(lambda);
  let failed = null_is(answered);
  if (failed) {
    log(git_push_folder_url_try.name, {
      folder,
      url,
    });
  }
  return answered;
}

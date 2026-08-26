import { arguments_assert } from "./arguments_assert.mjs";
import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_combine } from "./text_combine.mjs";
import { throws_not_async } from "./throws_not_async.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
export async function git_commit_exists_is(commit) {
  "$plain commit";
  "Whether a commit of that name is still here to be read";
  "History was rewritten once, and every name written down before that stopped naming anything. A name like that is not a commit that went wrong - there is nothing there to go wrong - so anything that goes to the trouble of standing a copy of the repo at it fails on the checkout, several retries in, with a message about a tree rather than about the name it was handed. Asked first, the same fact costs one read and is the answer rather than the failure";
  "The name is asked about as a commit and not merely as an object, because a name that happens to spell some other kind of thing in the store is still not somewhere a copy can stand";
  "The name goes over as its own word, so nothing a name contains can turn into a second word and become a further instruction to git";
  arguments_assert(arguments, 1);
  let here = folder_current_absolute();
  let asked = text_trim(commit);
  let spelled = text_combine(asked, "^{commit}");
  let exists = await throws_not_async(lambda);
  async function lambda() {
    await git_folder_run(here, ["cat-file", "-e", spelled]);
  }
  return exists;
}

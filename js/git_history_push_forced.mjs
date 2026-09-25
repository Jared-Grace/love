import { arguments_assert } from "./arguments_assert.mjs";
import { git_folder_head_commit } from "./git_folder_head_commit.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { catch_error_text_or_null_async } from "./catch_error_text_or_null_async.mjs";
import { git_push_urls } from "./git_push_urls.mjs";
import { git_url_head_carries_commit } from "./git_url_head_carries_commit.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function git_history_push_forced(folder) {
  "$plain folder";
  "Puts the history a repository is holding onto every address it writes to, over the top of whatever was there, and then asks each address whether what it sent is underneath what that address is standing on before saying it worked.";
  "For a history that was replaced rather than added to. An ordinary push asks an address to catch up and an address that cannot simply refuses; this one tells it to let go of what it had, which is the only way a rewritten past ever reaches anybody else, and the only thing here that another person's copy cannot recover from on its own.";
  "The complaint is kept rather than thrown, because one address taking it while another refuses is the ordinary outcome and git reports that mixed result as a plain failure. Thrown, it would end this before the asking, and the asking is the only real answer - a refused force-push and a successful one look exactly alike from here.";
  "★ THE COMMIT IS READ BEFORE THE SENDING AND NOT AFTER, AND THAT WAS ONCE THE OTHER WAY ROUND. Everybody here writes to one branch, and sending a replaced history takes long enough that this folder has moved on by the time an address can be asked - so read afterwards, the question became 'is the address standing on a commit that did not exist when I sent', which nothing can ever answer yes to. Measured 2026-09-25 on a send of about four hundred megabytes: one address took it, the folder went two commits further while it was going, and both addresses were then reported as still on the old history. What was sent is the only fixed thing to compare against.";
  "★ AND THE COMPARISON IS UNDERNEATH-OR-EQUAL RATHER THAN THE SAME, for the same reason. An address holding what was sent has taken the rewrite; so has an address holding anything built on top of it, and ordinary sending puts it there by itself within minutes. Only an address holding something the sent commit is not underneath refused.";
  "Two different refusals read alike and mean opposite things. An address saying it will not allow this needs a person to open it. An address saying it could not hold the branch still, because it is at one commit and this expected another, means the machine's own ordinary sending got there first in the same moment - nothing is wrong, the address is already on this history, and asking again is the whole fix. Which one it was is in the complaint that comes back.";
  "★ AND THE COMPLAINT IS WHERE TO LOOK FIRST, BEFORE THE HINT BELOW. One address refusing and another taking it exits as a single plain failure, because addresses are pushed to together and git reports the pair; the complaint is the only thing that says which was which. Measured the same day, the complaint held a completed forced update for one address and a dropped connection for the other, while the hint said the branch was probably protected - and it was not protected anywhere. A large send failing part way through is at least as ordinary as a protected branch, so the hint names a likely cause and the complaint names the real one.";
  arguments_assert(arguments, 1);
  let commit = await git_folder_head_commit(folder);
  async function push_forced() {
    await git_folder_run(folder, ["push", "--force", "origin", "main"]);
  }
  let push_trouble = await catch_error_text_or_null_async(push_forced);
  let urls = await git_push_urls(folder);
  async function url_carries(url) {
    let carried = await git_url_head_carries_commit(folder, url, commit);
    return carried;
  }
  let answered = await list_map_async(urls, url_carries);
  function url_behind_is(answer) {
    let stale = not(answer.carries);
    return stale;
  }
  let behind = list_filter(answered, url_behind_is);
  let r = {
    commit,
    push_trouble,
    urls: answered,
  };
  list_empty_is_assert_json(behind, {
    hint: "these addresses are not standing on the history that was sent, nor on anything built on top of it — read the complaint below first, because it says which address refused and why; a part-way failure on a large send and a protected branch both arrive here looking the same, and only one of them needs a person to open the branch and send again",
    behind,
    commit,
    push_trouble,
  });
  return r;
}

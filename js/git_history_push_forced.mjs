import { arguments_assert } from "./arguments_assert.mjs";
import { catch_error_text_or_null_async } from "./catch_error_text_or_null_async.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { git_folder_head_commit } from "./git_folder_head_commit.mjs";
import { git_push_urls } from "./git_push_urls.mjs";
import { git_history_url_head_matches } from "./git_history_url_head_matches.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { not } from "./not.mjs";
export async function git_history_push_forced(folder) {
  "$plain folder";
  "Puts the history a repository is holding onto every address it writes to, over the top of whatever was there, and then asks each address what it is standing on before saying it worked.";
  "For a history that was replaced rather than added to. An ordinary push asks an address to catch up and an address that cannot simply refuses; this one tells it to let go of what it had, which is the only way a rewritten past ever reaches anybody else, and the only thing here that another person's copy cannot recover from on its own.";
  "The complaint is kept rather than thrown, because one address taking it while another refuses is the ordinary outcome and git reports that mixed result as a plain failure. Thrown, it would end this before the asking, and the asking is the only real answer - a refused force-push and a successful one look exactly alike from here.";
  "Separate from the rewrite that usually comes before it so that a refusal can be answered on its own. An address that would not take it is unprotected by hand and then simply asked again, rather than the whole rewrite being done a second time to reach its last step.";
  "Two different refusals read alike and mean opposite things. An address saying it will not allow this needs a person to open it. An address saying it could not hold the branch still, because it is at one commit and this expected another, means the machine's own ordinary sending got there first in the same moment - nothing is wrong, the address is already on this history, and asking again is the whole fix. Which one it was is in the complaint that comes back.";
  arguments_assert(arguments, 1);
  async function push_forced() {
    await git_folder_run(folder, ["push", "--force", "origin", "main"]);
  }
  let push_trouble = await catch_error_text_or_null_async(push_forced);
  let commit = await git_folder_head_commit(folder);
  let urls = await git_push_urls(folder);
  async function url_matches(url) {
    let matches = await git_history_url_head_matches(url, commit);
    return matches;
  }
  let answered = await list_map_async(urls, url_matches);
  function url_behind_is(answer) {
    let stale = not(answer.matches);
    return stale;
  }
  let behind = list_filter(answered, url_behind_is);
  let r = {
    commit,
    push_trouble,
    urls: answered,
  };
  list_empty_is_assert_json(behind, {
    hint: "these addresses are still on the old history, most likely because the branch is protected there — unprotect it there, run this again, and protect it back",
    behind,
    commit,
    push_trouble,
  });
  return r;
}

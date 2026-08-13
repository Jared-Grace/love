import { git_push_folder_url_try } from "./git_push_folder_url_try.mjs";
import { git_push_urls } from "./git_push_urls.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function git_push_folder_now(folder) {
  "Sends this folder's work to every address its remote writes to, one address at a time.";
  "Handing git the whole list at once is the shorter way to write it, and it fails as a whole - so a single unreachable address makes a push that reached everywhere else read as a failure. The caller above this one takes that to mean nothing was sent and so never writes down when it last ran, which brings the same push and the same complaint back every few minutes for as long as that one address stays down.";
  "So only every address failing counts as a failure here, because that is the single ending where the work reached nowhere at all. Anything short of it is a copy one round behind, and the next round carries it.";
  let urls = await git_push_urls(folder);
  async function each_url(url) {
    let printed = await git_push_folder_url_try(folder, url);
    return printed;
  }
  let answered = await list_map_async(urls, each_url);
  let reached = list_filter_null_not_is(answered);
  list_empty_not_is_assert_json(reached, {
    folder,
    urls,
  });
  return reached;
}

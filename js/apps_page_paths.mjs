import { arguments_assert } from "./arguments_assert.mjs";
import { repos_paths_map_unordered } from "./repos_paths_map_unordered.mjs";
import { repo_folder_public_or_null } from "./repo_folder_public_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { folder_read_recursive_paths_async } from "./folder_read_recursive_paths_async.mjs";
import { list_squash } from "./list_squash.mjs";
import { html_extension } from "./html_extension.mjs";
import { list_filter_ends_with } from "./list_filter_ends_with.mjs";
export async function apps_page_paths() {
  "Every app page there is, named by the whole way to it on disk rather than by the last part of that way.";
  "the twin that answers with bare file names is the one to ask when the name is all that is wanted, and it is the older and more used of the two. This one exists because a name alone cannot be opened: two repos each hold a public folder, so the name says which page and nothing at all about where it is.";
  "It reads all the way down rather than the top layer only, which it did until 2026-08-25. The top layer alone is not where a page with nothing behind it turns up. A page that ought to be an app and is not is one somebody put there by hand, and a hand-made page goes into the working copy's own folder, which is one layer further in and so was never looked at. That is where the only one ever found was sitting - a typing test kept by hand, reachable by address, answering to no app. Reading down found sixty-four more pages on the day it was changed and no new offender, so the widening cost nothing and closed the one place the rule was not being asked.";
  "EACH REPOSITORY IS ASKED WHERE IT SERVES FROM RATHER THAN TOLD. This used to take the one folder this repository serves out of and look for a folder of that same name inside every repository beside it, which held only for as long as they all agreed. On 2026-09-03 this one moved its served folder under web/ and the one beside it did not, and from that day this threw on a folder that was not there - so the rule about a page answering to no app had not been asked of any repository at all, this one included, while reading as a red gate the whole time.";
  "A repository that names no served folder is passed over with nothing rather than stopped on, the same way the twin treats a repository with no such folder: not every repository is sent anywhere, and one that is not has no pages to be judged for.";
  arguments_assert(arguments, 0);
  let result = await repos_paths_map_unordered(apps_page_paths_lambda);
  async function apps_page_paths_lambda(folder) {
    let served = await repo_folder_public_or_null(folder);
    if (null_is(served)) {
      let r = [];
      return r;
    }
    let found = await folder_read_recursive_paths_async(served);
    return found;
  }
  let squashed = list_squash(result);
  let sufix = html_extension();
  let aps = list_filter_ends_with(squashed, sufix);
  return aps;
}

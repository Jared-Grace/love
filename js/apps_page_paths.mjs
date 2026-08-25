import { folder_public } from "./folder_public.mjs";
import { repos_paths_map_unordered_combine_squash } from "./repos_paths_map_unordered_combine_squash.mjs";
import { folder_read_recursive_paths_async } from "./folder_read_recursive_paths_async.mjs";
import { html_extension } from "./html_extension.mjs";
import { list_filter_ends_with } from "./list_filter_ends_with.mjs";
export async function apps_page_paths() {
  "Every app page there is, named by the whole way to it on disk rather than by the last part of that way.";
  "the twin that answers with bare file names is the one to ask when the name is all that is wanted, and it is the older and more used of the two. This one exists because a name alone cannot be opened: two repos each hold a public folder, so the name says which page and nothing at all about where it is.";
  "It reads all the way down rather than the top layer only, which it did until 2026-08-25. The top layer alone is not where a page with nothing behind it turns up. A page that ought to be an app and is not is one somebody put there by hand, and a hand-made page goes into the working copy's own folder, which is one layer further in and so was never looked at. That is where the only one ever found was sitting - a typing test kept by hand, reachable by address, answering to no app. Reading down found sixty-four more pages on the day it was changed and no new offender, so the widening cost nothing and closed the one place the rule was not being asked.";
  let fop = folder_public();
  let result = await repos_paths_map_unordered_combine_squash(
    fop,
    folder_read_recursive_paths_async,
  );
  let sufix = html_extension();
  let aps = list_filter_ends_with(result, sufix);
  return aps;
}

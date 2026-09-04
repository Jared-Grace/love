import { arguments_assert } from "./arguments_assert.mjs";
import { repos_public_paths_map_unordered_combine_squash } from "./repos_public_paths_map_unordered_combine_squash.mjs";
import { folder_read_recursive_paths_async } from "./folder_read_recursive_paths_async.mjs";
import { html_extension } from "./html_extension.mjs";
import { list_filter_ends_with } from "./list_filter_ends_with.mjs";
export async function apps_page_paths() {
  "Every app page there is, named by the whole way to it on disk rather than by the last part of that way.";
  "the twin that answers with bare file names is the one to ask when the name is all that is wanted, and it is the older and more used of the two. This one exists because a name alone cannot be opened: two repos each hold a public folder, so the name says which page and nothing at all about where it is.";
  "It reads all the way down rather than the top layer only, which it did until 2026-08-25. The top layer alone is not where a page with nothing behind it turns up. A page that ought to be an app and is not is one somebody put there by hand, and a hand-made page goes into the working copy's own folder, which is one layer further in and so was never looked at. That is where the only one ever found was sitting - a typing test kept by hand, reachable by address, answering to no app. Reading down found sixty-four more pages on the day it was changed and no new offender, so the widening cost nothing and closed the one place the rule was not being asked.";
  "Each repository is asked where it serves from rather than told, and the walk that does the asking carries the reasons. This used to take the one folder this repository serves out of and look for a folder of that same name inside every repository beside it, which held only for as long as they all agreed - and from the day they stopped agreeing this threw, so the rule about a page answering to no app had not been asked of any repository at all, this one included, while reading as a red gate the whole time.";
  arguments_assert(arguments, 0);
  let squashed = await repos_public_paths_map_unordered_combine_squash(
    folder_read_recursive_paths_async,
  );
  let sufix = html_extension();
  let aps = list_filter_ends_with(squashed, sufix);
  return aps;
}

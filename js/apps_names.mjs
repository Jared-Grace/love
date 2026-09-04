import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { apps_names_file_path } from "./apps_names_file_path.mjs";
import { repos_paths_map_unordered_combine_squash } from "./repos_paths_map_unordered_combine_squash.mjs";
import { apps_names_file } from "./apps_names_file.mjs";
export async function apps_names() {
  arguments_assert(arguments, 0);
  ("The name of every app there is - each repo asked for its own, and the answers put together.");
  ("It used to be read off the folder that gets SENT, and that made existing and being published one single fact. An app being worked on had to leave a page standing at a public address in order to be admitted here; the page held no bytes, because there was nothing to publish yet; and a tidy-up rightly deleted an address that served nothing - which silently took the app out of this list and stopped its build from running at all. The published question is answered by ",
    fn_name("apps_published_names"),
    " now.");
  ("It was then read off the folder the working builds are written into, on the reasoning that a page anybody can open is the first moment an app exists. That reasoning still holds and the folder still does not, because that folder is deliberately never committed - it was left out on the fifteenth of August to keep twenty one megabytes of packed pages out of every clone. So a copy of the repo frozen at a commit holds no such folder, this answered that there were no apps anywhere, and naming any app inside a frozen copy threw. Nothing went red: every gate that runs in a frozen copy was already past by then, and the throw came from the build afterwards, which reads as that one app failing rather than as every app being unnameable.");
  ("So the names are written down instead, by hand, in each repo's own file. Nothing can work them out: an app's name and the names of its own functions run together across the underscore, so the page g_bible and the helper g_arcs are the same shape, and no reading of the names alone tells which is which. Written down, they are part of the commit, and a copy frozen at a commit can answer from itself.");
  ("Forgetting to write a new app down is caught by the next thing anybody does with it, because a build resolves the app's name through here - so the app cannot be built at all until it is listed, which is a louder answer than any check could give afterwards.");
  let path = apps_names_file_path();
  let names = await repos_paths_map_unordered_combine_squash(
    path,
    apps_names_file,
  );
  return names;
}

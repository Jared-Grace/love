import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { path_directory } from "./path_directory.mjs";
import { repos_names } from "./repos_names.mjs";
import { repo_current_name } from "./repo_current_name.mjs";
import { path_join } from "./path_join.mjs";
import { qa_snapshot_link } from "./qa_snapshot_link.mjs";
import { equal } from "./equal.mjs";
export async function qa_snapshot_siblings_link(repos) {
  "Puts a stand-in for every neighbouring repo beside a frozen copy";
  "A name in another repo is found by stepping out of this folder and back down into a neighbour by name, so a copy sitting on its own resolves nothing - it has to have neighbours the same way";
  "They are pointers to the living repos rather than copies, because no question asked here is about their contents";
  let here = folder_current_absolute();
  let beside = path_directory(here);
  let names = await repos_names();
  let mine = repo_current_name();
  for (let name of names) {
    if (equal(name, mine)) {
      continue;
    }
    let live = path_join([beside, name]);
    let link = path_join([repos, name]);
    await qa_snapshot_link(live, link);
  }
}

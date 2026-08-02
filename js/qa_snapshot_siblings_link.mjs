import { repos_beside_paths } from "./repos_beside_paths.mjs";
import { properties_get } from "./properties_get.mjs";
import { property_get } from "./property_get.mjs";
import { path_join } from "./path_join.mjs";
import { qa_snapshot_link } from "./qa_snapshot_link.mjs";
export async function qa_snapshot_siblings_link(repos) {
  "Puts a stand-in for every neighbouring repo beside a frozen copy";
  "A name in another repo is found by stepping out of this folder and back down into a neighbour by name, so a copy sitting on its own resolves nothing - it has to have neighbours the same way";
  "They are pointers to the living repos rather than copies, because no question asked here is about their contents";
  let paths = await repos_beside_paths();
  let names = properties_get(paths);
  for (let name of names) {
    let live = property_get(paths, name);
    let link = path_join([repos, name]);
    await qa_snapshot_link(live, link);
  }
}

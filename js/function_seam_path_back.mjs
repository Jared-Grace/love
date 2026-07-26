import { equal_not } from "./equal_not.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_reverse } from "./list_reverse.mjs";
export function function_seam_path_back(arrived, parents, start) {
  "Reads the remembered parent of each name back to the one the walk began at, then turns the chain the right way round so it is read the way the calls happen.";
  let chain = [arrived];
  let name = arrived;
  while (equal_not(name, start)) {
    let parent = property_get(parents, name);
    list_add(chain, parent);
    name = parent;
  }
  let path = list_reverse(chain);
  return path;
}

import { repos_acronyms_to_names } from "./repos_acronyms_to_names.mjs";
import { list_single } from "./list_single.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function repo_acronym_to_name(acronym) {
  let inverted = await repos_acronyms_to_names();
  let repos_matching = object_property_get(inverted, acronym);
  let repo_name = list_single(repos_matching);
  return repo_name;
}

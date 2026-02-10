import { repos_acronyms_to_names } from "../../../love/public/src/repos_acronyms_to_names.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function repo_acronym_to_name(acronym) {
  let inverted = await repos_acronyms_to_names();
  let repos_matching = property_get(inverted, acronym);
  let repo_name = list_single(repos_matching);
  return repo_name;
}

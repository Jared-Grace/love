import { list_single } from "./list_single.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_invert } from "./object_invert.mjs";
import { repo_acronym_get } from "./repo_acronym_get.mjs";
import { list_to_dictionary_async } from "./list_to_dictionary_async.mjs";
import { repos } from "./repos.mjs";
export async function repo_acronym_to_name(acronym) {
  let all = await repos();
  let dictionary = await list_to_dictionary_async(all, repo_acronym_get);
  let inverted = object_invert(dictionary);
  let repos_matching = object_property_get(inverted, acronym);
  let repo_name = list_single(repos_matching);
  return repo_name;
}

import { object_invert } from "./object_invert.mjs";
import { repo_acronym_get } from "./repo_acronym_get.mjs";
import { list_to_dictionary_async } from "./list_to_dictionary_async.mjs";
import { repos } from "./repos.mjs";
export async function repos_acronyms_to_names() {
  let all = await repos();
  let dictionary = await list_to_dictionary_async(all, repo_acronym_get);
  let inverted = object_invert(dictionary);
  return inverted;
}

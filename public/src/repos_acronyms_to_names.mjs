import { repos_names } from "../../../love/public/src/repos_names.mjs";
import { object_invert } from "../../../love/public/src/object_invert.mjs";
import { repo_acronym_get } from "../../../love/public/src/repo_acronym_get.mjs";
import { list_to_dictionary_unordered_async } from "../../../love/public/src/list_to_dictionary_unordered_async.mjs";
export async function repos_acronyms_to_names() {
  let repos = await repos_names();
  let dictionary = await list_to_dictionary_unordered_async(
    repos,
    repo_acronym_get,
  );
  let inverted = object_invert(dictionary);
  return inverted;
}

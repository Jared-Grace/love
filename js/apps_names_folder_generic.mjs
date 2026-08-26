import { arguments_assert } from "./arguments_assert.mjs";
import { repos_paths_map_unordered_combine_squash } from "./repos_paths_map_unordered_combine_squash.mjs";
import { folder_read_htmls } from "./folder_read_htmls.mjs";
import { list_map } from "./list_map.mjs";
import { path_name } from "./path_name.mjs";
export async function apps_names_folder_generic(folder) {
  arguments_assert(arguments, 1);
  ("The name of every app with a page in one named folder, gathered across every repo there");
  ("is and answered as bare names.");
  ("The folder is handed in because the same reading answers two different questions, and");
  ("which folder is asked is the whole of the difference between them: the dev folder says");
  ("which apps EXIST, and the folder that gets sent says which apps have been PUBLISHED.");
  ("Written twice instead, those two would be free to drift, and a drift between them reads");
  ("as an app appearing or vanishing rather than as two lists disagreeing.");
  ("A repo with no such folder counts as having no apps in it rather than stopping the");
  ("reading, because not every repo builds every stage - and one that does not is a fact");
  ("about that repo, not a fault to throw about.");
  let htmls = await repos_paths_map_unordered_combine_squash(
    folder,
    folder_read_htmls,
  );
  let ans = list_map(htmls, path_name);
  return ans;
}

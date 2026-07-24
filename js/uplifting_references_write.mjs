import { uplifting_references_get } from "./uplifting_references_get.mjs";
import { bible_verses_uplifting } from "./bible_verses_uplifting.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_size } from "./list_size.mjs";
import { json_to } from "./json_to.mjs";
import { folder_public_join } from "./folder_public_join.mjs";
import { user_repo_path_combine } from "./user_repo_path_combine.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function uplifting_references_write() {
  ("write the deduped list of uplifting verse references to firebase-served data, so the verses app fetches which verses to draw from (via ",
    uplifting_references_get.name,
    ") instead of baking the list into its bundle. Run this whenever the authored list ",
    bible_verses_uplifting.name,
    " changes.");
  let all = bible_verses_uplifting();
  let unique = list_unique(all);
  let name = "bible/uplifting/references.json";
  let joined_path = folder_public_join(name);
  let path = await user_repo_path_combine(joined_path);
  let json = json_to(unique);
  await file_overwrite(path, json);
  let count = list_size(unique);
  return count;
}

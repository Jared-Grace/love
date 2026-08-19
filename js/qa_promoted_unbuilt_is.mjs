import { arguments_assert } from "./arguments_assert.mjs";
import { folder_public } from "./folder_public.mjs";
import { qa_promoted_unbuilt_folder_is } from "./qa_promoted_unbuilt_folder_is.mjs";
import { user_repo_path_combine } from "./user_repo_path_combine.mjs";
export async function qa_promoted_unbuilt_is(app_name) {
  "$plain app_name";
  "Whether nothing has been built yet for one app - which is to say the pieces waiting for it in the folder that gets sent are all of them empty.";
  "All this decides is which folder that is. Everything else was put next door so it could be asked of a folder made up for the asking, because a question that always reaches for the live folder can never be asked twice by a standing check.";
  arguments_assert(arguments, 1);
  let public_relative = folder_public();
  let folder = await user_repo_path_combine(public_relative);
  let unbuilt = await qa_promoted_unbuilt_folder_is(folder, app_name);
  return unbuilt;
}

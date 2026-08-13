import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_prod_hashes } from "./firebase_prod_hashes.mjs";
import { folder_public } from "./folder_public.mjs";
import { qa_promoted_public_copy_folder_is } from "./qa_promoted_public_copy_folder_is.mjs";
import { user_repo_path_combine } from "./user_repo_path_combine.mjs";
export async function qa_promoted_public_copy_is(app_name) {
  "$plain app_name";
  "Whether the pieces waiting to be sent under one name are a copy of something already being served - which is an account of where they came from, and the only one a kept copy of an app can give.";
  "All this decides is which folder that is and what is being served. Everything else was moved next door so it could be asked of a folder made up for the asking, because a question that always reaches for the live folder can never be asked twice by a standing check.";
  "What is being served is the note of it rather than the wire, the same note every other question in front of a sending stands on, so this costs two files read while the sending is held up waiting for it.";
  arguments_assert(arguments, 1);
  let public_relative = folder_public();
  let folder = await user_repo_path_combine(public_relative);
  let served = await firebase_prod_hashes();
  let copy = await qa_promoted_public_copy_folder_is(folder, app_name, served);
  return copy;
}

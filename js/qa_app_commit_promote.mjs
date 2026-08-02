import { app_shared_frozen_assert } from "./app_shared_frozen_assert.mjs";
import { app_shared_name_search } from "./app_shared_name_search.mjs";
import { file_copy_overwrite } from "./file_copy_overwrite.mjs";
import { folder_public_join } from "./folder_public_join.mjs";
import { properties_get } from "./properties_get.mjs";
import { qa_app_commit_hashes } from "./qa_app_commit_hashes.mjs";
import { qa_build_folder } from "./qa_build_folder.mjs";
import { qa_snapshot_app_file_path } from "./qa_snapshot_app_file_path.mjs";
import { user_repo_path_combine } from "./user_repo_path_combine.mjs";
export async function qa_app_commit_promote(search, commit) {
  "$plain search";
  "$plain commit";
  "Builds one app out of one commit alone and puts those very pieces where the sending reads from, answering with a short word standing for each of them";
  "This is the step that makes the whole thing mean anything. Building an app out of a commit and looking at what came out proves nothing on its own if something else is built again on the way out - and something built again is a different thing even from the same commit, because an app is free to make part of itself up as it is built and one of them varies the steps of an animation every time. So the pieces that were looked at have to be the pieces that go";
  "What it replaces built from the folder everybody is working in, which meant the pieces that went out were only ever built around the same time as the commit that was found sound, never out of it";
  "The pieces to move are taken from what was actually made rather than from a list of what an app usually has, so a page carrying no script of its own moves the one file it has and nothing goes looking for the one it never had";
  "An app that is not to be rebuilt is refused before anything is built rather than after, so being told no costs nothing. That refusal is the same one its predecessor made and is kept deliberately - a new way to put pieces where the sending reads from would otherwise be a way around it";
  let app_name = await app_shared_name_search(search);
  app_shared_frozen_assert(app_name);
  let hashes = await qa_app_commit_hashes(search, commit);
  let folder = qa_build_folder();
  let file_names = properties_get(hashes);
  for (let file_name of file_names) {
    let made = qa_snapshot_app_file_path(folder, file_name);
    let relative = folder_public_join(file_name);
    let sending = await user_repo_path_combine(relative);
    await file_copy_overwrite(made, sending);
  }
  return hashes;
}

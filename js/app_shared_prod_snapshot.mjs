import { app_shared_prod_snapshot_folder } from "./app_shared_prod_snapshot_folder.mjs";
import { folder_public } from "./folder_public.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { path_join } from "./path_join.mjs";
export async function app_shared_prod_snapshot(app_name, label) {
  "$plain app_name";
  "$plain label";
  "Keeps the copy of an app that people are looking at right now under a name of its own, so the next build can take its place without the one already out there going off the internet.";
  "All this decides is which folder that is - the one the site is served out of, in the running copy of the repo. Everything else was moved next door so it could be asked of a folder made up for the asking, because a question that always reaches for the live folder can never be asked twice by a standing check.";
  "The folder is worked out from where this code sits on disk rather than looked up as the repo the person at the keyboard last chose, so a frozen copy of the repo answers about itself.";
  let folder_love = folder_repo_love();
  let public_relative = folder_public();
  let folder = path_join([folder_love, public_relative]);
  let kept = await app_shared_prod_snapshot_folder(folder, app_name, label);
  return kept;
}

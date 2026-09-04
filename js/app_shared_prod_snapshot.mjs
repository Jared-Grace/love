import { folder_repo_love_public } from "./folder_repo_love_public.mjs";
import { app_shared_prod_snapshot_folder } from "./app_shared_prod_snapshot_folder.mjs";
export async function app_shared_prod_snapshot(app_name, label) {
  "$plain app_name";
  "$plain label";
  "Keeps the copy of an app that people are looking at right now under a name of its own, so the next build can take its place without the one already out there going off the internet.";
  "All this decides is which folder that is - the one the site is served out of, in the running copy of the repo. Everything else was moved next door so it could be asked of a folder made up for the asking, because a question that always reaches for the live folder can never be asked twice by a standing check.";
  "Which folder that is, and why it is worked out from where this code sits rather than looked up, is said where the folder is named.";
  let folder = folder_repo_love_public();
  let kept = await app_shared_prod_snapshot_folder(folder, app_name, label);
  return kept;
}

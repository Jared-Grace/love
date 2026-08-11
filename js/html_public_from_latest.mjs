import { app_shared_frozen_assert } from "./app_shared_frozen_assert.mjs";
import { app_shared_name_latest_text } from "./app_shared_name_latest_text.mjs";
import { app_shared_name_search_info } from "./app_shared_name_search_info.mjs";
import { folder_app_copy_all } from "./folder_app_copy_all.mjs";
import { folder_app_stale_delete } from "./folder_app_stale_delete.mjs";
import { folder_public } from "./folder_public.mjs";
import { folder_public_join } from "./folder_public_join.mjs";
import { property_get } from "./property_get.mjs";
import { repo_path_combine } from "./repo_path_combine.mjs";
export async function html_public_from_latest(search) {
  "$plain search";
  "Moves an app from the stage it was checked at into the one people see, every piece of it together, refusing on an app that is frozen.";
  "Which pieces those are is asked of the stage the app was checked at, rather than being the page and the script and nothing else. A build is free to cut part of an app out into a script of its own and have the page send for it once it is running, and it names such a script with a number of its own choosing - so no list written here could name them. Named here, the extra scripts stayed behind at the checked stage while the page went on ahead, and the page then sent for a script that was not there. That goes wrong nowhere but here, because at the checked stage the extra scripts are sitting right beside the page and everything works.";
  "Whatever the previous build left here and this one did not make is taken away afterwards, so what people are looking at is one build's work rather than two builds' leftovers piled together.";
  "Taking away comes after putting in place, so a run that fell over halfway has removed nothing it had not already replaced.";
  let info = await app_shared_name_search_info(search);
  let a_name = property_get(info, "a_name");
  app_shared_frozen_assert(a_name);
  let repo_name = property_get(info, "repo_name");
  let latest_text = app_shared_name_latest_text();
  let latest_relative = folder_public_join(latest_text);
  let from_folder = repo_path_combine(repo_name, latest_relative);
  let public_relative = folder_public();
  let to_folder = repo_path_combine(repo_name, public_relative);
  let copied = await folder_app_copy_all(from_folder, to_folder, a_name);
  await folder_app_stale_delete(to_folder, a_name, copied);
  return copied;
}

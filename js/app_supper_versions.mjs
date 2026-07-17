import { ebible_choices } from "./ebible_choices.mjs";
import { app_supper_folders_get } from "./app_supper_folders_get.mjs";
import { app_supper_chosen_from_options } from "./app_supper_chosen_from_options.mjs";
import { app_supper_versions_hash_set } from "./app_supper_versions_hash_set.mjs";
import { app_bible_subset_screen_generic } from "./app_bible_subset_screen_generic.mjs";
export async function app_supper_versions(context) {
  let options = await ebible_choices();
  let folders = app_supper_folders_get(context);
  let chosen = app_supper_chosen_from_options(folders, options);
  function on_change() {
    app_supper_versions_hash_set(chosen);
  }
  app_bible_subset_screen_generic(
    context,
    options,
    chosen,
    "name",
    "bible_folder",
    on_change,
    "Versions",
  );
}

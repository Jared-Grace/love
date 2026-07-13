import { app_supper_choices } from "./app_supper_choices.mjs";
import { app_supper_versions_chosen_get } from "./app_supper_versions_chosen_get.mjs";
import { app_bible_subset_screen_generic } from "./app_bible_subset_screen_generic.mjs";
export async function app_supper_versions(context) {
  let options = await app_supper_choices();
  let versions_chosen = app_supper_versions_chosen_get(context);
  app_bible_subset_screen_generic(
    context,
    options,
    versions_chosen,
    "name",
    "bible_folder",
    "versions_chosen",
    "Versions",
    "Order shown in verses",
  );
}

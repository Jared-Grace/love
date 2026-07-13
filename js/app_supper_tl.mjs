import { app_supper_main_generic } from "./app_supper_main_generic.mjs";
import { app_supper_tl_home } from "./app_supper_tl_home.mjs";
import { ebible_language_english } from "./ebible_language_english.mjs";
import { ebible_folder_tagalog } from "./ebible_folder_tagalog.mjs";
export async function app_supper_tl(context) {
  let english = ebible_language_english();
  let tagalog = {
    name: "Tagalog",
    bible_folder: ebible_folder_tagalog(),
  };
  let default_chosen = [tagalog, english];
  await app_supper_main_generic(
    app_supper_tl,
    app_supper_tl_home,
    default_chosen,
    context,
  );
}

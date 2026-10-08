import { app_supper_tl_languages_chosen } from "./app_supper_tl_languages_chosen.mjs";
import { app_supper_main_generic } from "./app_supper_main_generic.mjs";
import { app_supper_tl_home } from "./app_supper_tl_home.mjs";
export async function app_supper_tl(context) {
  "Which two languages, and which order they come in, is next door under its own name, so that the sentence this page is described by can be checked against the page rather than against a copy of it.";
  let default_chosen = app_supper_tl_languages_chosen();
  await app_supper_main_generic(
    app_supper_tl,
    app_supper_tl_home,
    default_chosen,
    context,
  );
}

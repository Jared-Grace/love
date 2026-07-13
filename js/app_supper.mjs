import { app_supper_main_generic } from "./app_supper_main_generic.mjs";
import { app_supper_home } from "./app_supper_home.mjs";
import { ebible_language_english } from "./ebible_language_english.mjs";
export async function app_supper(context) {
  let english = ebible_language_english();
  let default_chosen = [english];
  await app_supper_main_generic(app_supper, app_supper_home, default_chosen, context);
}

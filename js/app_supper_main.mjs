import { app_supper_main_generic } from "./app_supper_main_generic.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
export async function app_supper_main(context) {
  let ebible_folder = ebible_folder_english;
  let folder_gets = [ebible_folder];
  await app_supper_main_generic(folder_gets, context);
}

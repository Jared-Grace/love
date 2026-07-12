import { app_supper_main_generic } from "./app_supper_main_generic.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_folder_tagalog } from "./ebible_folder_tagalog.mjs";
export async function app_supper_tl_main(context) {
  let folder_gets = [ebible_folder_tagalog, ebible_folder_english];
  await app_supper_main_generic(folder_gets, context);
}

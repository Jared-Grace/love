import { app_supper_main_generic } from "../../../love/public/src/app_supper_main_generic.mjs";
import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
import { ebible_folder_tagalog } from "../../../love/public/src/ebible_folder_tagalog.mjs";
import { ebible_folder_cebuano } from "../../../love/public/src/ebible_folder_cebuano.mjs";
export async function app_supper_tl_main() {
  let ebible_folder = ebible_folder_cebuano;
  let folder_gets = [ebible_folder];
  folder_gets = [ebible_folder_tagalog, ebible_folder_english];
  await app_supper_main_generic(folder_gets, context);
}

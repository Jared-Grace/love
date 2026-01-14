import { ebible_references_parse_lines } from "../../../love/public/src/ebible_references_parse_lines.mjs";
import { html_p_text_multiple } from "../../../love/public/src/html_p_text_multiple.mjs";
import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
import { app_supper_verses_get } from "../../../love/public/src/app_supper_verses_get.mjs";
import { firebase_name_jg } from "../../../love/public/src/firebase_name_jg.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_supper_main(context) {
  marker("1");
  firebase_name_jg();
  let e = ebible_folder_english();
  let root = html_clear_context(context);
  let list = await app_supper_verses_get();
  await ebible_references_parse_lines(bible_folders, lines);
  html_p_text_multiple(list, list2);
}

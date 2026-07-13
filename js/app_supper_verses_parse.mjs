import { ebible_references_parse_lines_browser } from "./ebible_references_parse_lines_browser.mjs";
import { app_supper_references } from "./app_supper_references.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
export async function app_supper_verses_parse(ebible_folder) {
  let references = app_supper_references();
  let split = text_split_newline(references);
  let list = await ebible_references_parse_lines_browser([ebible_folder], split);
  return list;
}

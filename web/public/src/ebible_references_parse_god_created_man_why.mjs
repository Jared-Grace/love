import { folder_user_docs_path } from "../../../love/public/src/folder_user_docs_path.mjs";
import { ebible_references_parse } from "../../../love/public/src/ebible_references_parse.mjs";
import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
import { ebible_folder_urdu } from "../../../love/public/src/ebible_folder_urdu.mjs";
export async function ebible_references_parse_god_created_man_why() {
  let v = ebible_folder_english();
  let file_name = "god_created_man_why.txt";
  let v2 = ebible_folder_urdu();
  let file_path = folder_user_docs_path(file_name);
  let bible_folders = [v2, v];
  let list = await ebible_references_parse(bible_folders, file_path);
  return list;
}

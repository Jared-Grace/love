import { folder_user_docs_path } from "./folder_user_docs_path.mjs";
import { ebible_references_parse } from "./ebible_references_parse.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_folder_urdu } from "./ebible_folder_urdu.mjs";
export async function ebible_references_parse_god_created_man_why() {
  let v2 = ebible_folder_urdu();
  let v = ebible_folder_english();
  const file_name = "god_created_man_why.txt";
  file_name = "bible_references.hopenation.org.txt";
  let file_path = folder_user_docs_path(file_name);
  let bible_folders = [v2, v];
  let list = await ebible_references_parse(bible_folders, file_path);
  return list;
}

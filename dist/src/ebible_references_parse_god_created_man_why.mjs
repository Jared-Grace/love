import { ebible_references_parse_folder_user_docs } from "../../../love/public/src/ebible_references_parse_folder_user_docs.mjs";
import { ebible_folder_urdu } from "../../../love/public/src/ebible_folder_urdu.mjs";
export async function ebible_references_parse_god_created_man_why() {
  let file_name = "god_created_man_why.txt";
  let v2 = ebible_folder_urdu();
  let list = await ebible_references_parse_folder_user_docs(file_name, v2);
  return list;
}

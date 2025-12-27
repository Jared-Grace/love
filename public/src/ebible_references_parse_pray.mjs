import { ebible_folder_swahili } from "../../../love/public/src/ebible_folder_swahili.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { ebible_references_parse_folder_user_docs } from "../../../love/public/src/ebible_references_parse_folder_user_docs.mjs";
export async function ebible_references_parse_pray() {
  marker("1");
  let file_name = "pray.txt";
  let v2 = ebible_folder_swahili();
  let list = await ebible_references_parse_folder_user_docs(file_name, v2);
  return list;
}

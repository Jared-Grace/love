import { ebible_references_parse_lines } from "../../../love/public/src/ebible_references_parse_lines.mjs";
import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
import { string_split_newline } from "../../../love/public/src/string_split_newline.mjs";
export async function app_supper_verses_get() {
  let references = `Matthew 26:26-30
Mark 14:22-26
Luke 22:14-20
John 6:27-35
John 6:48-58
Acts 2:42
Acts 20:7
1 Corinthians 10:16-22
1 Corinthians 11:17-34`;
  let split = string_split_newline(references);
  let e = ebible_folder_english();
  let list = await ebible_references_parse_lines([e], split);
  return list;
}

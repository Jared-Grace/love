import { file_overwrite } from "../../../love/public/src/file_overwrite.mjs";
import { file_name_json } from "../../../love/public/src/file_name_json.mjs";
import { folder_user_combine } from "../../../love/public/src/folder_user_combine.mjs";
import { json_format_to } from "./json_format_to.mjs";
export async function sandbox() {
  const { default: XLSX } = await import("xlsx");
  ("todo: download from");
  ("https://bereanbible.com/bsb_tables.xlsx");
  ("that way more is automated for other users of this script");
  let path_input = folder_user_combine("downloads", "bsb_tables.xlsx");
  const wb = XLSX.readFile(path_input);
  const ws = wb.Sheets["biblosinterlinear96"];
  const json = XLSX.utils.sheet_to_json(ws);
  let contents = json_format_to(json);
  let path_output = file_name_json(path_input);
  let result = await file_overwrite(path_output, contents);
}

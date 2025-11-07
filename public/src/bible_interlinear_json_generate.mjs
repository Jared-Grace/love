import { file_overwrite } from "../../../love/public/src/file_overwrite.mjs";
import { bible_interlinear_json_path } from "../../../love/public/src/bible_interlinear_json_path.mjs";
import { json_format_to } from "../../../love/public/src/json_format_to.mjs";
import { bible_interlinear_excel_path } from "../../../love/public/src/bible_interlinear_excel_path.mjs";
export async function bible_interlinear_json_generate() {
  const { default: XLSX } = await import("xlsx");
  ("todo: download from");
  ("https://bereanbible.com/bsb_tables.xlsx");
  ("that way more is automated for other users of this script");
  let path_input = bible_interlinear_excel_path();
  const wb = XLSX.readFile(path_input);
  const ws = wb.Sheets["biblosinterlinear96"];
  const json = XLSX.utils.sheet_to_json(ws);
  let contents = json_format_to(json);
  let path_output = bible_interlinear_json_path();
  let result = await file_overwrite(path_output, contents);$e
}

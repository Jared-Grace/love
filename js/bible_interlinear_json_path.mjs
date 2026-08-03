import { file_name_json } from "./file_name_json.mjs";
import { bible_interlinear_excel_path } from "./bible_interlinear_excel_path.mjs";
export function bible_interlinear_json_path() {
  "Where the interlinear Bible lands once the spreadsheet it came from has been turned into data, named from that spreadsheet's own path.";
  let path_input = bible_interlinear_excel_path();
  let path_output = file_name_json(path_input);
  return path_output;
}

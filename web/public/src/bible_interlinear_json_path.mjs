import { file_name_json } from "../../../love/public/src/file_name_json.mjs";
import { bible_interlinear_excel_path } from "../../../love/public/src/bible_interlinear_excel_path.mjs";
export function bible_interlinear_json_path() {
  let path_input2 = bible_interlinear_excel_path();
  let path_output = file_name_json(path_input2);
  return path_output;
}

import { folder_user_combine } from "../../../love/public/src/folder_user_combine.mjs";
export function bible_interlinear_excel_path() {
  let joined = folder_user_combine("downloads", "bsb_tables.xlsx");
  return joined;
}

import { folder_user_join } from "../../../love/public/src/folder_user_join.mjs";
export function bible_interlinear_excel_path() {
  let joined = folder_user_join("downloads", "bsb_tables.xlsx");
  return joined;
}

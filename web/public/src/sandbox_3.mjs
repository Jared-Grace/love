import { file_open } from "../../../love/public/src/file_open.mjs";
import { folder_user_downloads_path } from "../../../love/public/src/folder_user_downloads_path.mjs";
export async function sandbox_3() {
  let r = folder_user_downloads_path("contacts.csv");
  await file_open(f_path);
}
